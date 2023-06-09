import { useContext } from "react";
import CountriesContext from "../../store/countries-context";
import styles from "./CountryInfo.module.scss";
const CountryInfo = () => {
  const { setShowCountryInfo, countryInfo, isDarkMode } =
    useContext(CountriesContext);

  const backToCountries = () => {
    setShowCountryInfo(false);
  };

  const { flagImg } = countryInfo[0];

  return (
    <div className={styles.container}>
      <div className={styles["left-content"]}>
        <button
          className={isDarkMode ? styles.dark : ""}
          onClick={backToCountries}
        >
          &#8592; Back
        </button>
        <img src={flagImg} alt={`${countryInfo[0].name} flag`}></img>
      </div>
      <section
        className={`${styles["right-content"]} ${
          isDarkMode ? styles["dark"] : ""
        }`}
      >
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
          <p className={styles.borders}>
            <strong>Border Countries</strong>
          </p>
        </div>
        <div className={styles["right-content__element"]}>
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
            {countryInfo[0].languages}
          </p>
        </div>
      </section>
    </div>
  );
};
export default CountryInfo;
