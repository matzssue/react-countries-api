import { useState, useContext } from "react";
import CountriesContext from "../../store/countries-context";
import styles from "./CountryInfo.module.scss";
const CountryInfo = (props) => {
  const { setShowCountryInfo, countries, isLoading, countryInfo } =
    useContext(CountriesContext);
  console.log(countryInfo);
  const backToCountries = () => {
    setShowCountryInfo(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <button onClick={backToCountries}></button>
        <img
          src={countryInfo[0].flagImg}
          alt={`${countryInfo[0].name} flag`}
        ></img>
      </div>
      <section>
        <div>
          <h3>{countryInfo[0].name}</h3>

          <p>
            <strong>Official Name: </strong>
            {countryInfo[0].nativeName}
          </p>
          <p>
            <strong>Population: </strong>
            {countryInfo[0].population}
          </p>
          <p>
            <strong>Region: </strong>
            {countryInfo[0].region}
          </p>
          <p>
            <strong>Sub Region: </strong>
            {countryInfo[0].subregion}
          </p>
          <p>
            <strong>Capital: </strong>
            {countryInfo[0].capital}
          </p>
        </div>
        <div>
          <p>
            <strong>Top Level Domain: </strong>
            {countryInfo[0].domain}
          </p>
          <p>
            <strong>Currencies: </strong>
            {countryInfo[0].currencies}
          </p>
          <p>
            <strong>Languages: </strong>
            {countryInfo.languages}
          </p>
        </div>
        <div>
          <p>
            <strong>Border Countries</strong>
          </p>
        </div>
      </section>
    </div>
  );
};
export default CountryInfo;
