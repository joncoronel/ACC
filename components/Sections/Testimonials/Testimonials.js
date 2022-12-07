"use client";

import styles from "./Testimonials.module.scss";
// import Swiper core and required modules

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
export default function Testimonials() {
  return (
    <section className={styles.Testimonials}>
      <div className={styles.container}>
        <>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
            <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
            <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
            <SwiperSlide className={styles.slide}>Slide 5</SwiperSlide>
            <SwiperSlide className={styles.slide}>Slide 6</SwiperSlide>
            <SwiperSlide className={styles.slide}>Slide 7</SwiperSlide>
            <SwiperSlide className={styles.slide}>Slide 8</SwiperSlide>
            <SwiperSlide className={styles.slide}>Slide 9</SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
}
