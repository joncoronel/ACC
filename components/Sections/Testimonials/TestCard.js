import styles from "./TestCard.module.scss";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaYelp } from "react-icons/fa";

export default function TestCard(props) {
  const noStars = 5 - props.rating;

  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(
      <AiFillStar key={`${i}${props.name}stars`} className={styles.star} />
    );
  }

  if (noStars > 0) {
    for (let i = 0; i < noStars; i++) {
      stars.push(
        <AiOutlineStar
          key={`${i}${props.name}noStars`}
          className={styles.star}
        />
      );
    }
  }
  return (
    <div className={styles.card}>
      <div className={styles.rating}>{stars}</div>
      <div className={styles.text}>{props.quote}</div>
      <div className={styles.person}>
        <div className={styles.image}>
          <Image src={props.image} alt="Picture of the author" fill />
        </div>
        <div className={styles.name}>{props.name}</div>
      </div>
    </div>
  );
}
