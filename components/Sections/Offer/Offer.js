"use client";

import styles from "./Offer.module.scss";
import Image from "next/image";
import { Accordion } from "@mantine/core";
import { useState } from "react";
import image1 from "../../../images/services/electronics.webp";
import image2 from "../../../images/services/speaker.webp";
import image3 from "../../../images/services/tires.webp";

export default function Offer() {
  const [value, setValue] = useState("electronics");

  return (
    <section className={styles.offer}>
      <h3 className={styles.subtitle}>Contact Us</h3>
      <h2 className={styles.title}>Get In Touch With Us</h2>
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
            classNames={{
              label: `${styles.itemTitle}`,
              item: `${styles.item}`,
              content: `${styles.accContent}`,
            }}
            className={styles.rootAccordion}
          >
            <Accordion.Item value="electronics">
              <Accordion.Control>
                <h3>Custom Electronics</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  Sed convallis faucibus enim, ut condimentum ante varius eget.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Duis pretium tempus commodo. Pellentesque quis lectus
                  hendrerit, maximus nulla sit amet, feugiat lacus. Fusce
                  scelerisque mollis commodo. Maecenas id purus neque. Cras
                  massa lectus, porta sed mollis
                </p>

                <div className={styles.mobileImagebox}>
                  <div className={styles.mobileImage}>
                    <Image className={styles.innerImage} fill src={image1} />
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="speaker">
              <Accordion.Control>
                <h3>Top-End Speaker Systems</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  Sed convallis faucibus enim, ut condimentum ante varius eget.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Duis pretium tempus commodo. Pellentesque quis lectus
                  hendrerit, maximus nulla sit amet, feugiat lacus. Fusce
                  scelerisque mollis commodo. Maecenas id purus neque. Cras
                  massa lectus, porta sed mollis
                </p>
                <div className={styles.mobileImagebox}>
                  <div className={styles.mobileImage}>
                    <Image className={styles.innerImage} fill src={image2} />
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="wheel">
              <Accordion.Control>
                <h3>Tires and Rims</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  Sed convallis faucibus enim, ut condimentum ante varius eget.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Duis pretium tempus commodo. Pellentesque quis lectus
                  hendrerit, maximus nulla sit amet, feugiat lacus. Fusce
                  scelerisque mollis commodo. Maecenas id purus neque. Cras
                  massa lectus, porta sed mollis
                </p>
                <div className={styles.mobileImagebox}>
                  <div className={styles.mobileImage}>
                    <Image className={styles.innerImage} fill src={image3} />
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={styles.imageBox}>
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
      </div>
    </section>
  );
}
