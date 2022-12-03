"use client";

import classes from "./Nav.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import Burger from "../Navigation/misc/Burger";

export default function Nav() {
  const [small, setSmall] = useState(false);
  const [opened, setOpened] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 60) {
        if (!small) {
          console.log("hello");
          setSmall(true);
        }
      } else {
        if (small) {
          console.log("damn");
          setSmall(false);
        }
      }
    }
  };

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [opened]);

  useEffect(() => {
    controlNavbar();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [small]);

  return (
    <>
      <div
        onClick={() => setOpened(!opened)}
        className={`${classes.overlay} ${opened ? classes.open : ""}`}
      ></div>
      <header className={`${classes.header}  ${small ? classes.scrolled : ""}`}>
        <nav className={classes.nav}>
          <div className={classes.container}>
            <div className={classes.logo}>Logo</div>
            <div className={classes.content}>
              <ul
                className={`${classes.navLinks} ${opened ? classes.open : ""}`}
              >
                <li className={classes.link}>
                  <Link href="/">About</Link>
                </li>
                <li className={classes.link}>
                  <Link href="/">Work</Link>
                </li>
                <li className={classes.link}>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              <ul
                className={`${classes.navMobile} ${opened ? classes.open : ""}`}
              >
                <li className={classes.link}>
                  <Link href="/">About</Link>
                </li>
                <li className={classes.link}>
                  <Link href="/">Work</Link>
                </li>
                <li className={classes.link}>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              <Burger opened={opened} setOpened={setOpened} small={small} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
