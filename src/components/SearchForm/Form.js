import { useContext } from "react";
import searchIcon from "../../assets/magnifying-glass-solid.svg";
import styles from "./Form.module.scss";
import SelectFilterInput from "./SelectFilterInput";
import CountriesContext from "../../store/countries-context";
const Form = () => {
  const countryCtx = useContext(CountriesContext);

  const searchCountryHandler = (e) => {
    countryCtx.addNameFilter(e.target.value);
    console.log(countryCtx.filters);
  };
  const searchCountryByRegion = (e) => {
    countryCtx.addRegionFilter(e.target.value);
  };

  return (
    <form>
      <input
        onChange={searchCountryHandler}
        type="search"
        placeholder="Search for a country..."
      />
      <img src={searchIcon} />
      <SelectFilterInput
        onChange={searchCountryByRegion}
        className={styles["filter-select"]}
      />
    </form>
  );
};
export default Form;
