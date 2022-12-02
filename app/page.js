import classes from "../styles/Home.module.scss";

import Landing from "../components/sections/Landing";
import Specialty from "../components/sections/Specialty";

export default function HomePage() {
  return (
    <div className={classes.spacing}>
      <Landing />
      <Specialty />
    </div>
  );
}
