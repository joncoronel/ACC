"use client";

import classes from "./Nav.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import Burger from "../Navigation/misc/Burger";
import throttle from "lodash.throttle";
import Image from "next/image";
import Logo from "../../images/logo-5.svg";

export default function Nav() {
  const [small, setSmall] = useState(false);
  const [opened, setOpened] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 60) {
        if (!small) {
          setSmall(true);
        }
      } else {
        if (small) {
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

    const throttledScroll = throttle(controlNavbar, 100);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", throttledScroll);
      return () => {
        window.removeEventListener("scroll", throttledScroll);
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
          <div className={classes.logo}>
            <Image
              className={classes.icon}
              priority="true"
              alt="Website Logo"
              src={Logo}
              fill
            />
          </div>

          <ul className={`${classes.navLinks} ${opened ? classes.open : ""}`}>
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
          <button className={classes.navbtn}>Contact Us</button>
          <ul className={`${classes.navMobile} ${opened ? classes.open : ""}`}>
            <li className={classes.link}>
              <Link href="/">About</Link>
            </li>
            <li className={classes.link}>
              <Link href="/">Work</Link>
            </li>
            <li className={classes.link}>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <button className={`${classes.navbtn} ${classes.navbtnMobile}`}>
                Contact Us
              </button>
            </li>
          </ul>
          <Burger opened={opened} setOpened={setOpened} small={small} />
        </nav>
      </header>
    </>
  );
}
