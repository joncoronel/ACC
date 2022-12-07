"use client";

import styles from "./Offer.module.scss";
import Image from "next/image";
import { Accordion, createStyles } from "@mantine/core";
import { useState } from "react";
import image1 from "../../../images/services/electronics.webp";
import image2 from "../../../images/services/speaker.webp";
import image3 from "../../../images/services/tires.webp";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
    width: "100%",
  },

  item: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: "1px solid transparent",
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",

    "&[data-active]": {
      transform: "scale(1.03)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
  },
}));

export default function Offer() {
  const [value, setValue] = useState("electronics");
  const { classes } = useStyles();

  return (
    <section className={styles.offer}>
      <div className={styles.title}>
        Find everything you need for you car creations
      </div>
      <div className={styles.container}>
        <div className={styles.accordion}>
          <Accordion
            value={value}
            onChange={(newValue) => {
              if (newValue === null) {
                setValue(value);
              } else {
                setValue(newValue);
              }
            }}
            variant="separated"
            classNames={{ label: `${styles.itemTitle}` }}
            className={classes.root}
          >
            <Accordion.Item value="electronics">
              <Accordion.Control>Custom Electronics</Accordion.Control>
              <Accordion.Panel>panel-1</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="speaker">
              <Accordion.Control>Top-End Speaker Systems</Accordion.Control>
              <Accordion.Panel>panel-2</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="wheel">
              <Accordion.Control>Tires and Rims</Accordion.Control>
              <Accordion.Panel>panel-2</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={styles.images}>
          <div
            className={`${styles.image} ${
              value === "electronics" ? styles.active : ""
            }`}
          >
            <Image className={styles.innerImage} fill src={image1} />
          </div>
          <div
            className={`${styles.image} ${
              value === "speaker" ? styles.active : ""
            }`}
          >
            <Image className={styles.innerImage} fill src={image2} />
          </div>
          <div
            className={`${styles.image} ${
              value === "wheel" ? styles.active : ""
            }`}
          >
            <Image className={styles.innerImage} fill src={image3} />
          </div>
        </div>
      </div>
    </section>
  );
}
