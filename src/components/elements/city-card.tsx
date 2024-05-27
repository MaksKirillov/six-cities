type CityProps = {
  city: string;
  changeSelectedCity: (city: string) => void;
};

function CityCard({ city, changeSelectedCity }: CityProps): JSX.Element {
  return (
    <li className="locations__item" onClick={() => changeSelectedCity(city)}>
      <a className="locations__item-link tabs__item">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityCard;
