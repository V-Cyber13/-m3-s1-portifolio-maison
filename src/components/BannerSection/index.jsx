import bannerImg from "../../assets/banner-img.png";
import styles from "./style.module.css";
import { username } from "../../data/user";

export const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <span className="label">{username}</span>
        <h1 className="title1">Bem vindo ao meu portfólio</h1>
        <p className="paragraph">Uma frase interessante sobre mim</p>
        <button className="button">Saiba mais</button>
      </div>
      <img className={styles.bannerImg} src={bannerImg} alt="" />
    </section>
  );
};