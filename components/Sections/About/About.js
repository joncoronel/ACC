import styles from "./About.module.scss";
import Image from "next/image";
import mainImage from "../../../images/shop.jpg";

export default function About() {
  return (
    <section className={styles.about}>
      <h3 className={styles.subtitle}>About Us</h3>
      <h2 className={styles.title}>This is who we are</h2>
      <div className={styles.container}>
        <p className={styles.text}>
          Looking for professional installation, custom work, exceptional
          prices, and guaranteed satisfaction? Well, you’ve come to the right
          place. Started in 1992, by three long time friends (Jose, Robert &
          George), Advanced Car Creations- aka: ACC, has risen to the top of
          their class in car audio and installation. Whether it's a car alarm or
          a booming sound system, with over 17 years of car audio knowledge and
          experience, there’s nothing that ACC can't handle. They’ve put out
          numerous show cars that have been pictured in such magazines as Low
          Rider, Custom Imports, Auto Security & Sound, Street Trucks and
          others. ACC is also an authorized dealer. For car audio enthusiasts,
          ACC is the place to be. All of your car audio dreams can come true.
          For product information and prices feel free to contact them at (714)
          971-1945 or (714) 971-1012.
        </p>
        <div className={styles.other}>
          <div className={styles.imageWrapper}>
            <Image src={mainImage} fill />
          </div>
        </div>
      </div>
    </section>
  );
}
