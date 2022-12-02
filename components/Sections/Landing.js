import styles from "./Landing.module.scss";
import Image from "next/image";
import car from "../../images/car.svg";
import back from "../../images/background.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/*
      <div className={styles.wavy}>
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
        >
          <defs>
            <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="161"
                result="effect1_foregroundBlur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <rect width="900" height="600" fill="#add1e5"></rect>
          <g filter="url(#blur1)">
            <circle cx="273" cy="170" fill="#f1f5f9" r="357"></circle>
            <circle cx="463" cy="568" fill="#add1e5" r="357"></circle>
            <circle cx="762" cy="423" fill="#f1f5f9" r="357"></circle>
            <circle cx="72" cy="187" fill="#f1f5f9" r="357"></circle>
            <circle cx="453" cy="127" fill="#add1e5" r="357"></circle>
            <circle cx="393" cy="379" fill="#f1f5f9" r="357"></circle>
          </g>
        </svg>
      </div> */}
      <Image
        priority="true"
        alt="Background gradient for landing page"
        src={back}
        className={styles.back}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>Welcome Here</h1>
          <p className={styles.desc}>
            Search for everything you need for your car creations
          </p>
        </div>
        <Image
          priority="true"
          alt="Illustration of car shop"
          src={car}
          className={styles.image}
        />
      </div>
    </section>
  );
}
