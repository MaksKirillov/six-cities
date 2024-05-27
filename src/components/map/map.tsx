import React, {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { Location } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { getSelectedPoint } from '../../store/offer-process/selectors';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  points: Location[];
};

const defaultIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 30]
});

const activeIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [30, 30]
});

function MapComponent(props: MapProps): JSX.Element {
  const selectedPoint = useAppSelector(getSelectedPoint);
  const {points} = props;

  const city = points[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const currentUrl = window.location.href;

  useEffect(() => {
    if (map) {
      map.setView(
        [city.latitude, city.longitude],
        13
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });
        marker
          .setIcon(
            selectedPoint === point
              ? activeIcon
              : defaultIcon
          )
          .addTo(markerLayer);
      });

      if (currentUrl.includes('offer')) {
        const offerMarker = new Marker({
          lat: points.slice(-1)[0].latitude,
          lng: points.slice(-1)[0].longitude
        });
        offerMarker
          .setIcon(activeIcon)
          .addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, currentUrl]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

const Map = React.memo(MapComponent);

export default Map;
