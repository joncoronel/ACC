import RootStyleRegistry from "./emotion";

import Nav from "../components/Navigation/Nav";
import NewFooter from "../components/Footer/NewFooter";
import "../styles/globals.css";

import { Arima } from "@next/font/google";

const arima = Arima({ subsets: ["latin"], variable: "--font-arima" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={arima.variable}>
      <head />

      <body>
        <RootStyleRegistry>
          <Nav />
          <main>{children}</main>
          <NewFooter />
        </RootStyleRegistry>
      </body>
    </html>
  );
}
