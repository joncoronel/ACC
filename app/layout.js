import RootStyleRegistry from "./emotion";

import Nav from "../components/Navigation/Nav";
import NewFooter from "../components/Footer/NewFooter";
import "../styles/globals.css";

import { Arima, Signika } from "@next/font/google";

const arima = Arima({ subsets: ["latin"], variable: "--font-arima" });

const signika = Signika({ subsets: ["latin"], variable: "--font-signika" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${arima.variable} ${signika.variable}`}>
      <RootStyleRegistry>
        <head />

        <body>
          <Nav />
          <main>{children}</main>
          <NewFooter />
        </body>
      </RootStyleRegistry>
    </html>
  );
}
