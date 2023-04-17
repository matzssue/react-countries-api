import { useEffect, useState, useCallback } from "react";
import CountriesContext from "./countries-context";

const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [showCountryInfo, setShowCountryInfo] = useState(false);
  const [filters, setFilters] = useState({
    filterName: "",
    filterRegion: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");

      if (!response.ok) {
        throw new Error("Sorry, Sometning went wrong");
      }
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
      setLoading(false);
      console.error(error);
      const errorMessage = <div>{error.message}</div>;
      setError(errorMessage);
    }
  }, [setCountries, setLoading]);

  useEffect(() => {
    fetchCountries();
  }, []);

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
    countries,
    isLoading: loading,
    filters,
    showCountryInfo,
    countryInfo,
    isDarkMode,
    error,
    setShowCountryInfo,
    setCountryInfo,
    addRegionFilter,
    addNameFilter,
    setIsDarkMode,
    setError,
  };

  return (
    <CountriesContext.Provider value={countriesContext}>
      {props.children}
    </CountriesContext.Provider>
  );
};
export default CountriesProvider;
