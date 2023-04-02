import { useEffect, useState } from "react";
import CountriesContext from "./countries-context";
const CountriesProvider = (props) => {
  const [countries, setCountries] = useState({});

  const fetchCountries = async () => {
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
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const countriesContext = {
    countries: countries,
  };

  return (
    <CountriesContext.Provider value={countriesContext}>
      {props.children}
    </CountriesContext.Provider>
  );
};
export default CountriesProvider;
