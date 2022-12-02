import styles from "./Burger.module.scss";

export default function Burger(props) {
  return (
    <div
      onClick={() => props.setOpened(!props.opened)}
      className={`${styles.burger} ${props.opened ? styles.open : ""} ${
        props.small ? styles.scrolled : ""
      }`}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
}
