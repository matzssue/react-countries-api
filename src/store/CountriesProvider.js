import { useEffect, useState } from "react";
import CountriesContext from "./countries-context";
const CountriesProvider = (props) => {
  const [countries, setCountries] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterName: "",
    filterRegion: "",
  });

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const newData = data.map((country) => {
        return {
          flagImg: country.flags.png,
          name: country.name.common,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          domain: country.tld,
          currencies: country.currencies,
          languages: country.languages,
        };
      });
      console.log(newData);
      setCountries(newData);
      setLoading(false);
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
