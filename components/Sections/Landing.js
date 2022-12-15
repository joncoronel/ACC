import styles from "./Landing.module.scss";
import Image from "next/image";
import auto from "../../images/auto.svg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Everything you need for your car creations
          </h1>
          <p className={styles.desc}>
            Search for everything you need for your car creations
          </p>
        </div>
        <div className={styles.image}>
          <Image
            priority="true"
            alt="Illustration of car shop"
            src={auto}
            fill
            objectFit="contain"
            objectPosition="center"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
    </section>
  );
}
