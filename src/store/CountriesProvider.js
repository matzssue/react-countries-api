import { useEffect, useState } from "react";
import CountriesContext from "./countries-context";
const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterName: "",
    filterRegion: "",
  });
  const [showCountryInfo, setShowCountryInfo] = useState(false);
  const [countryInfo, setCountryInfo] = useState([]);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const newData = data.map((country) => {
        console.log(country.name.official);
        return {
          flagImg: country.flags.png,
          name: country.name.common,
          nativeName: country.name.official,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          domain: country.tld,
          currencies: country.currencies
            ? Object.values(country.currencies).map((currency) => currency.name)
            : [],
          languages: country.languages,
        };
      });
      console.log(newData);
      setLoading(false);
      return setCountries(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const addNameFilter = (inputValue) => {
    if (loading) return;
    setFilters({ ...filters, filterName: inputValue });
  };

  const addRegionFilter = (inputValue) => {
    if (loading) return;
    setFilters({ ...filters, filterRegion: inputValue });
  };

  const countriesContext = {
    countries: countries,
    isLoading: loading,
    filters: filters,
    showCountryInfo: showCountryInfo,
    countryInfo: countryInfo,
    setShowCountryInfo: setShowCountryInfo,
    setCountryInfo: setCountryInfo,
    addRegionFilter: addRegionFilter,
    addNameFilter: addNameFilter,
  };

  return (
    <CountriesContext.Provider value={countriesContext}>
      {props.children}
    </CountriesContext.Provider>
  );
};
export default CountriesProvider;
