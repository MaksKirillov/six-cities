import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import CityCard from './city-card';
import { City } from '../../types/offer';
import { Cities } from '../../const';

function ListOfCities(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CityCard
          key={city.name}
          city={city}
          changeSelectedCity={handleCityChange}
        />
      ))}
    </ul>
  );
}

export default ListOfCities;
