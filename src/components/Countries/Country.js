import styles from "./Country.module.scss";
import { useContext } from "react";
import CountriesContext from "../../store/countries-context";
const Country = ({ onClick, name, flagImg, region, population, capital }) => {
  const { isDarkMode } = useContext(CountriesContext);

  return (
    <div
      className={isDarkMode ? styles.dark : styles.container}
      role="button"
      onClick={onClick}
      data-country={pname}
    >
      <img src={flagImg} alt={`${pname} flag`} />
      <h2>{name}</h2>
      <p>
        <strong>Pupulation: </strong> {population}
      </p>
      <p>
        <strong>Region: </strong>
        {region}
      </p>
      <p>
        <strong>Capital: </strong>
        {capital}
      </p>
    </div>
  );
};
export default Country;
