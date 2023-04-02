import searchIcon from "../../assets/magnifying-glass-solid.svg";
import styles from "./Form.module.scss";
import SelectFilterInput from "./SelectFilterInput";
const Form = () => {
  return (
    <form>
      <input type="search" placeholder="Search for a country..." />
      <img src={searchIcon} />
      <SelectFilterInput className={styles["filter-select"]} />
    </form>
  );
};
export default Form;
