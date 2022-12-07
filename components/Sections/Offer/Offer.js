"use client";

import styles from "./Offer.module.scss";
import Image from "next/image";

export default function Offer() {
  return (
    <section className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.images}></div>
      </div>
    </section>
  );
}
