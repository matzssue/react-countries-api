import { useContext } from "react";
import CountriesContext from "../../store/countries-context";
import Country from "./Country";
import styles from "./CountriesList.module.scss";

const CountriesList = () => {
  const { countries } = useContext(CountriesContext);
  console.log(countries);

  let content = <div>Loading...</div>;

  if (countries.length > 0) {
    content = countries.map((country) => {
      return (
        <Country
          key={country.name}
          flagImg={country.flagImg}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      );
    });
  }

  return <div className={styles["countries-container"]}>{content}</div>;
};
export default CountriesList;
