import classes from "../styles/Home.module.scss";

import Landing from "../components/Sections/Landing";
import Specialty from "../components/Sections/Specialty";
import Offer from "../components/Sections/Offer/Offer.js";

export default function HomePage() {
  return (
    <div className={classes.spacing}>
      <Landing />
      <Specialty />
      <Offer />
    </div>
  );
}
