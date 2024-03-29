import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import styles from "./style.module.css";

export const ProjectSection = () => {
  return (
    <section>
      <h2 className="title2">Projetos</h2>
      <ul className={styles.listContainer}>
        {projects.map((project) => {
          return (
            <li className={styles.listItem}>
              <ProjectCard
                description={project.description}
                name={project.name}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};