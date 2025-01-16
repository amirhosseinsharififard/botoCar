import styles from "./Card.module.css";
import Location from "../icons/Location";
import Link from "next/link";
const Card = (props) => {
  const {id, name, model, year, distance, location, price, image} = props;
  return (
    <Link href={`/cars/${id}`}>

    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h4 className={styles.title}>{`${name} ${model}`}</h4>
      <h4 className={styles.detail}>{`${year}-${distance}km`}</h4>
      <div className={styles.footer}>
        <p>$ {price}</p>
        <div className={styles.location}>
          <p>{location}</p>
          <Location />
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
