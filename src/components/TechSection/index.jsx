import { TechCard } from "./TechCard";
import { technologies } from "../../data/technologies";
import styles from "./style.module.css";

export const TechSection = () => {
  return (
    <section>
      <h2 className="title2">Tecnologias</h2>
      <ul className={styles.listContainer}>
        {technologies.map((technology) => {
          return (
            <li className={styles.listItem}>
              <TechCard source={technology.img} techName={technology.name} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};