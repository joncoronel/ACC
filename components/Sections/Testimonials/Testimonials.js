"use client";

import styles from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import TestCard from "./TestCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import User1 from "../../../images/users/user1.jpg";
import User2 from "../../../images/users/user2.jpg";
import User3 from "../../../images/users/user3.jpg";
import "./Swiper.scss";

export default function Testimonials() {
  const reviews = [
    {
      name: "Von P.",
      image: User3,
      review:
        "These guys are straight forward and no hidden costs. Professional work.  I had my LED strip lights installed under my car.  Jose got me in and out same day.  Definitely will go back if I need anything done.",
      rating: 5,
    },
    {
      name: "Brian C.",
      image: User2,
      review:
        "I have purchased a lot of car audio equipment from them and have had them install different components of my system in addition to tuning my system, gains on my amps, equalizers on head unit, etc. Bottom line, they are very knowledgeable and friendly and have reasonable prices as well! They do an excellent job installing! I highly recommend them for all your car audio needs!",
      rating: 5,
    },
    {
      name: "Larry Lth.",
      image: User1,
      review:
        "Time heals all things. The guys are Advanced truly took the effort to correct the past and right the future. They offered fair pricing and again they have earned my trust and business. These guys knows their stuff and they know their gear for sure. I highly recommend them once again!",
      rating: 4,
    },
    {
      name: "Larry Lfh.",
      image: User1,
      review:
        "Time heals all things. The guys are Advanced truly took the effort to correct the past and right the future. They offered fair pricing and again they have earned my trust and business. These guys knows their stuff and they know their gear for sure. I highly recommend them once again!",
      rating: 4,
    },
    {
      name: "Larry Lgh.",
      image: User1,
      review:
        "Time heals all things. The guys are Advanced truly took the effort to correct the past and right the future. They offered fair pricing and again they have earned my trust and business. These guys knows their stuff and they know their gear for sure. I highly recommend them once again!",
      rating: 4,
    },
  ];

  const listReviews = reviews.map((rev) => (
    <SwiperSlide key={rev.name} className={styles.slide}>
      <TestCard
        name={rev.name}
        quote={rev.review}
        image={rev.image}
        rating={rev.rating}
      />
    </SwiperSlide>
  ));
  return (
    <section className={styles.Testimonials}>
      <div className={styles.banner}></div>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Satisfied Customers</h3>
        <h2 className={styles.title}>Kind words from customers</h2>

        <Swiper
          style={{
        
            "--swiper-navigation-size": "3rem",
          }}
          navigation={true}
          slidesPerView={1.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1.2,
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
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          {listReviews}
        </Swiper>
      </div>
    </section>
  );
}
