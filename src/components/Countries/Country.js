import { useContext } from "react";
import styles from "./Country.module.scss";
import CountriesContext from "../../store/countries-context";
import { useRef } from "react";
const Country = (props) => {
  const { countries } = useContext(CountriesContext);
  const countryRef = useRef(null);

  const showCountryInfo = () => {
    const country = countries.filter((country) => {
      return country.name === countryRef.current.dataset.country;
    });
    console.log(country);
  };

  return (
    <div
      ref={countryRef}
      className={styles.container}
      role="button"
      onClick={showCountryInfo}
      data-country={props.name}
    >
      <img src={props.flagImg} alt={`${props.name} flag`} />

      <h2>{props.name}</h2>
      <p>
        <strong>Pupulation:</strong> {props.population}
      </p>
      <p>
        <strong>Region:</strong>
        {props.region}
      </p>
      <p>
        <strong>Capital:</strong>
        {props.capital}
      </p>
    </div>
  );
};
export default Country;
