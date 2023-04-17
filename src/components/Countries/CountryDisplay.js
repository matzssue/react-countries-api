import CountriesList from "./CountriesList";
import CountryInfo from "./CountryInfo";
import { Fragment, useContext } from "react";
import CountriesContext from "../../store/countries-context";
import Form from "../SearchForm/Form";

import styles from "./CountryDisplay.module.scss";

export const CountryDetails = () => {
  const {
    showCountryInfo,
    countries,
    setCountryInfo,
    setShowCountryInfo,
    isDarkMode,
  } = useContext(CountriesContext);

  const showCountryInfoHandler = (e) => {
    const target = e.target.closest("div").dataset.country;
    const countryData = countries.filter((country) => country.name === target);
    setCountryInfo(countryData);
    setShowCountryInfo(true);
  };
  return (
    <main className={isDarkMode ? styles.dark : ""}>
      {showCountryInfo ? (
        <CountryInfo />
      ) : (
        <Fragment>
          <Form />
          <CountriesList onClick={showCountryInfoHandler} />
        </Fragment>
      )}
    </main>
  );
};
