import { useContext } from "react";
import searchIcon from "../../assets/magnifying-glass-solid.svg";
import styles from "./Form.module.scss";
import SelectFilterInput from "./SelectFilterInput";
import CountriesContext from "../../store/countries-context";
const Form = () => {
  const { addNameFilter, addRegionFilter, isDarkMode } =
    useContext(CountriesContext);

  const searchCountryHandler = (e) => {
    addNameFilter(e.target.value);
  };
  const searchCountryByRegion = (e) => {
    addRegionFilter(e.target.value);
  };

  return (
    <form className={isDarkMode ? styles.dark : styles.form}>
      <input
        onChange={searchCountryHandler}
        type="search"
        placeholder="Search for a country..."
      />
      <img src={searchIcon} />
      <SelectFilterInput
        onChange={searchCountryByRegion}
        className={`${styles["filter-select"]} ${
          isDarkMode ? styles["dark"] : ""
        }`}
      />
    </form>
  );
};
export default Form;
