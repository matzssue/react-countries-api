import { useEffect, useState, useCallback } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const newData = data.map((country) => {
        return {
          flagImg: country.flags.png,
          name: country.name.common,
          nativeName: country.name.official,
          population: country.population.toLocaleString(),
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          domain: country.tld,
          currencies: country.currencies
            ? Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")
            : [],
          languages: country.languages
            ? Object.values(country.languages).join(", ")
            : "",
        };
      });

      setLoading(false);
      setCountries(newData);
    } catch (error) {
      console.error(error);
    }
  }, [setCountries, setLoading]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const addNameFilter = (inputValue) => {
    if (loading) return;
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterName: inputValue,
    }));
  };

  const addRegionFilter = (inputValue) => {
    if (loading) return;
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterRegion: inputValue,
    }));
  };

  const countriesContext = {
    countries: countries,
    isLoading: loading,
    filters: filters,
    showCountryInfo: showCountryInfo,
    countryInfo: countryInfo,
    isDarkMode: isDarkMode,
    setShowCountryInfo: setShowCountryInfo,
    setCountryInfo: setCountryInfo,
    addRegionFilter: addRegionFilter,
    addNameFilter: addNameFilter,
    setIsDarkMode: setIsDarkMode,
  };

  return (
    <CountriesContext.Provider value={countriesContext}>
      {props.children}
    </CountriesContext.Provider>
  );
};
export default CountriesProvider;
