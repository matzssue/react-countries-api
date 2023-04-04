import { useContext, useEffect } from "react";
import CountriesContext from "../../store/countries-context";
import Country from "./Country";
import styles from "./CountriesList.module.scss";

const CountriesList = (props) => {
  const { countries, filters, isLoading } = useContext(CountriesContext);

  if (isLoading) {
    return <div className={styles.spinner}></div>;
  }

  const filteredCountries = countries.filter((country) => {
    if (filters.filterName !== "" && filters.filterRegion !== "") {
      return (
        country.name.toLowerCase().includes(filters.filterName.toLowerCase()) &&
        country.region.toLowerCase() === filters.filterRegion.toLowerCase()
      );
    } else if (filters.filterName !== "") {
      return country.name
        .toLowerCase()
        .includes(filters.filterName.toLowerCase());
    } else if (filters.filterRegion !== "") {
      return (
        country.region.toLowerCase() === filters.filterRegion.toLowerCase()
      );
    }
    return true;
  });

  const countriesList = filteredCountries.length > 0 ? filteredCountries : null;

  const renderedList = countriesList ? (
    countriesList.map((country) => {
      return (
        <Country
          key={country.name}
          flagImg={country.flagImg}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          onClick={props.onClick}
        />
      );
    })
  ) : (
    <div>No results found.</div>
  );

  return <div className={styles["countries-container"]}>{renderedList}</div>;
};

export default CountriesList;
