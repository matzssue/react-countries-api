import styles from "./Country.module.scss";
import { useContext } from "react";
import CountriesContext from "../../store/countries-context";
const Country = (props) => {
  const { isDarkMode } = useContext(CountriesContext);

  return (
    <div
      className={isDarkMode ? styles.dark : styles.container}
      role="button"
      onClick={props.onClick}
      data-country={props.name}
    >
      <img src={props.flagImg} alt={`${props.name} flag`} />
      <h2>{props.name}</h2>
      <p>
        <strong>Pupulation: </strong> {props.population}
      </p>
      <p>
        <strong>Region: </strong>
        {props.region}
      </p>
      <p>
        <strong>Capital: </strong>
        {props.capital}
      </p>
    </div>
  );
};
export default Country;
