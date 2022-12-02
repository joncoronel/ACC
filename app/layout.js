import Nav from "../components/Navigation/Nav";
import "../styles/globals.css";
import styles from "../styles/Home.module.scss";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Nav />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
