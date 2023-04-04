import { useContext } from "react";
import modeIcon from "../../assets/moon-regular.svg";

import styles from "./Header.module.scss";
import CountriesContext from "../../store/countries-context";

const Header = () => {
  const { setIsDarkMode, isDarkMode } = useContext(CountriesContext);

  const switchModeHandler = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle(styles.dark);
  };
  return (
    <header className={isDarkMode ? styles.dark : styles}>
      <h1>Where is the world?</h1>

      <button onClick={switchModeHandler}>
        <img alt="switch-mode-icon" src={modeIcon} />
        <span>Dark mode</span>
      </button>
    </header>
  );
};

export default Header;
