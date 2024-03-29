import styles from "./style.module.css";

export const TechCard = ({ source, techName }) => {
  return (
    <>
      <div className={styles.listItemContainer}>
        <img src={source} alt={techName} />
        <span className="title3">{techName}</span>
      </div>
    </>
  );
};