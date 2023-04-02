import modeIcon from "../../assets/moon-regular.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles}>
      <h1>Where is the world?</h1>

      <button>
        <img alt="switch-mode-icon" src={modeIcon} />
        <span>Dark mode</span>
      </button>
    </header>
  );
};

export default Header;
