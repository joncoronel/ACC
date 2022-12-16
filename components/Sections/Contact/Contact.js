"use client";

import styles from "./Contact.module.scss";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import contact from "../../../images/contactnew.svg";
import Image from "next/image";
import Map from "./Map";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className={styles.formSection}>
      <input
        className={`${styles.textInput} ${
          meta.touched && meta.error ? styles.invalid : ""
        } ${meta.touched && !meta.error ? styles.valid : ""}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyAreaInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className={styles.formSection}>
      <textarea
        className={`${styles.textInput} ${styles.areaInput} ${
          meta.touched && meta.error ? styles.invalid : ""
        } ${meta.touched && !meta.error ? styles.valid : ""}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function Contact() {
  const { ref: myRef, inView } = useInView({ triggerOnce: true });
  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/Advanced+Car+Creations/@33.7750044,-117.9041331,17z/data=!4m12!1m6!3m5!1s0x80dcd81863a56d43:0x8b389526507b4adf!2sAdvanced+Car+Creations!8m2!3d33.7749616!4d-117.9019493!3m4!1s0x80dcd81863a56d43:0x8b389526507b4adf!8m2!3d33.7749616!4d-117.9019493"
    );
  };

  return (
    <section ref={myRef} className={styles.Contact}>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Contact Us</h3>
        <h2 className={styles.title}>Get In Touch With Us</h2>
        <div className={styles.formBox}>
          <div className={styles.form}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                message: Yup.string()
                  .max(200, "Must be 200 characters or less")

                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form className={styles.formik}>
                <MyTextInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />

                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <MyAreaInput
                  label="Message"
                  name="message"
                  type="message"
                  placeholder="Message..."
                />

                <button className={styles.submitBtn} type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
          <div className={styles.formArt}>
            <Image alt="Illustration of car shop" src={contact} fill />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.socials}>
            <div className={styles.address} onClick={handleClick}>
              <span>
                <FaMapMarkerAlt />
              </span>
              <p>13231 W Garden Grove Blvd, Garden Grove, CA 92843</p>
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
