"use client";

import styles from "./Offer.module.scss";
import Image from "next/image";
import { Accordion } from "@mantine/core";
import { useState } from "react";

export default function Offer() {
  const [value, setValue] = useState<string | null>("customization");

  return (
    <section className={styles.offer}>
      <div className={styles.container}>
        <Accordion
          value={value}
          onChange={(newValue) => {
            if (newValue === null) {
              setValue(value);
            } else {
              setValue(newValue);
            }
          }}
        >
          <Accordion.Item value="customization">
            <Accordion.Control>control-1</Accordion.Control>
            <Accordion.Panel>panel-1</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Control>control-2</Accordion.Control>
            <Accordion.Panel>panel-2</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <div className={styles.images}></div>
      </div>
    </section>
  );
}
