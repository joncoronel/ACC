import classes from "../styles/Home.module.scss";

import Landing from "../components/Sections/Landing";

import Offer from "../components/Sections/Offer/Offer.js";
import Testimonials from "../components/Sections/Testimonials/Testimonials";
import Contact from "../components/Sections/Contact/Contact";
import About from "../components/Sections/About/About";
import Wave from "../components/Sections/Wave";

export default function HomePage() {
  return (
    <div className={classes.spacing}>
      <Landing />
      <Wave />

      <About />
      <Offer />
      <Testimonials />
      <Contact />
    </div>
  );
}
