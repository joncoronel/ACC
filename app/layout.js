import Nav from "../components/Navigation/Nav";
import "../styles/globals.css";

import { Arima } from "@next/font/google";

const arima = Arima({ subsets: ["latin"], variable: "--font-arima" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={arima.variable}>
      <head />

      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
