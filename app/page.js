import classes from "../styles/Home.module.scss";

import Landing from "../components/Sections/Landing";

import Offer from "../components/Sections/Offer/Offer.js";
import Testimonials from "../components/Sections/Testimonials/Testimonials";
import Contact from "../components/Sections/Contact/Contact";

export default function HomePage() {
  return (
    <div className={classes.spacing}>
      <Landing />

      <Offer />
      <Testimonials />
      <Contact />
    </div>
  );
}
