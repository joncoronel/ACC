import styles from "./Specialty.module.scss";
import Image from "next/image";
import Speaker from "../../images/icons/speaker.svg";
import Wheel from "../../images/icons/wheel.svg";
import Elec from "../../images/icons/electronic.svg";

export default function Specialty() {
  return (
    <section className={styles.specialty}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Specialty coffees that make you happy and cheer you up!
        </h2>
        <div className={styles.content}>
          <div className={styles.item}>
            <Image className={styles.icon} src={Wheel} />
            <div className={styles.text}>
              <h3>Custome Tires</h3>
              <p>aishdajdhajsdhajsdhajsdhjh</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image className={styles.icon} src={Speaker} />
            <div className={styles.text}>
              <h3>Custome Tires</h3>
              <p>aishdajdhajsdhajsdhajsdhjh</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image className={styles.icon} src={Elec} />
            <div className={styles.text}>
              <h3>Custome Tires</h3>
              <p>aishdajdhajsdhajsdhajsdhjh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
