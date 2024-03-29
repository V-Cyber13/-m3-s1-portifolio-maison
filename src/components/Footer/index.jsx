import { FooterList } from "./FooterList";
import { user } from "../../data/user";
import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.itemContainer}>
        <h2 className={`title2 ${styles.itemTitle}`}>Contato</h2>
        <ul className={styles.listContainer}>
          <FooterList />
        </ul>
      </div>

      <p className={`paragraph ${styles.itemParagraph}`}>
        Todos os direitos reservados - {user}
      </p>
    </footer>
  );
};