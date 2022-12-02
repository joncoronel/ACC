import classes from "../styles/Home.module.scss";

import Landing from "../components/Sections/Landing";
import Specialty from "../components/Sections/Specialty";

export default function HomePage() {
  return (
    <div className={classes.spacing}>
      <Landing />
      <Specialty />
    </div>
  );
}
