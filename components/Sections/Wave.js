import styles from "./Wave.module.scss";

export default function Wave() {
  return (
    <div className={styles.animatedWave} aria-hidden="true">
      <div className={styles.waveWrapper}>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
}
