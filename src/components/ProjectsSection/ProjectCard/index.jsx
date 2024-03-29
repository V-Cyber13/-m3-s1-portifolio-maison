import gitHubIcon from "../../../assets/git-icon.png";
import styles from "./style.module.css";

export const ProjectCard = ({ name, description }) => {
  return (
    <>
      <div className={styles.listItemContainer}>
        <h3 className="title3">{name}</h3>
        <p className={`paragraph ${styles.itemParagraph}`}>{description}</p>
        <a className="link" href="#">
          Saiba mais
        </a>
      </div>
      <img src={gitHubIcon} alt="GitHub logo" />
    </>
  );
};