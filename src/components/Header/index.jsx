import portfolioLogo from "../../assets/portfolio.png";
import { HeaderLinks } from "./HeaderLinks";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header className={styles.headerBox}>
      <img src={portfolioLogo} alt="Logo do portfólio" />
      <nav>
        <HeaderLinks />
      </nav>
      <button className="button">Contato</button>
    </header>
  );
};