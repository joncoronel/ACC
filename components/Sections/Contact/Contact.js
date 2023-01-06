"use client";

import styles from "./Contact.module.scss";

import contact from "../../../images/contactnew.svg";
import Image from "next/image";
import Map from "./Map";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import ContactForm from "./ContactForm";


export default function Contact() {
  const { ref: myRef, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={myRef} className={styles.Contact}>
      <div className={styles.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.container}>
        <h3 className={styles.subtitle}>Contact Us</h3>
        <h2 className={styles.title}>Get In Touch With Us</h2>
        <div className={styles.formBox}>
          <div className={styles.form}>
            <ContactForm />
          </div>
          <div className={styles.formArt}>
            <Image alt="Illustration of car shop" src={contact} fill />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.socials}>
            <div className={styles.address}>
              <span>
                <FaMapMarkerAlt />
              </span>
              <a href="https://www.google.com/maps/place/Advanced+Car+Creations/@33.7750042,-117.9041288,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd81863a56d43:0x8b389526507b4adf!8m2!3d33.7749641!4d-117.9019459">
                13231 W Garden Grove Blvd, Garden Grove, CA 92843
              </a>
            </div>
            <div className={styles.number}>
              <span>
                <AiFillPhone />
              </span>
              <a href="tel:(714) 971-1012">(714) 971-1012</a>
            </div>
            <div className={styles.email}>
              <span>
                <AiFillMail />
              </span>
              <a href="mailto:contact@mail.com">contact@mail.com</a>
            </div>
            <div className={styles.media}>
              <a
                href="https://www.facebook.com/advanced-car-creations-114086455269891/"
                aria-label={"Visit our Facebook Page"}
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/advancedcarcreations/?hl=en"
                aria-label={"Visit our Instagram Page"}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className={styles.map}>
            {!inView ? <div>Loading...</div> : <Map />}
          </div>
        </div>
      </div>
    </section>
  );
}
