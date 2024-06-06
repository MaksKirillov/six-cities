import { getCity } from '../../store/offer-process/selectors';
import { useAppSelector } from '../../hooks';

type CityProps = {
  city: string;
  changeSelectedCity: (city: string) => void;
};

function CityCard({ city, changeSelectedCity }: CityProps): JSX.Element {
  const selectedCity = useAppSelector(getCity);

  if (selectedCity === city) {
    return (
      <li className="locations__item" onClick={() => changeSelectedCity(city)}>
        <div className="locations__item-link tabs__item tabs__item--active">
          <span>{city}</span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="locations__item" onClick={() => changeSelectedCity(city)}>
        <div className="locations__item-link tabs__item">
          <span>{city}</span>
        </div>
      </li>
    );
  }

}

export default CityCard;
