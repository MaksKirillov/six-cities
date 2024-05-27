import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offer-process/offer-process';
import { cities } from '../../const';
import CityCard from './city-card';

function ListOfCities(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <CityCard
          key={city}
          city={city}
          changeSelectedCity={handleCityChange}
        />
      ))}
    </ul>
  );
}

export default ListOfCities;
