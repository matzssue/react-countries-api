import CountriesList from "./CountriesList";
import CountryInfo from "./CountryInfo";
import { Fragment, useContext } from "react";
import CountriesContext from "../../store/countries-context";

const CountryDetails = () => {
  const { showCountryInfo, countries, setCountryInfo, setShowCountryInfo } =
    useContext(CountriesContext);

  const showCountryInfoHandler = (e) => {
    const target = e.target.closest("div").dataset.country;
    const countryData = countries.filter((country) => country.name === target);
    setCountryInfo(countryData);
    setShowCountryInfo(true);
  };
  return (
    <Fragment>
      {showCountryInfo ? (
        <CountryInfo />
      ) : (
        <CountriesList onClick={showCountryInfoHandler} />
      )}
    </Fragment>
  );
};
export default CountryDetails;
