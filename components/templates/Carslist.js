import {useRouter} from "next/router";
import carsData from "../../data/carsData";
import Back from "../icons/Back";
import styles from "./CarsList.module.css";
import Card from "../module/Card";
const Carslist = ({category, data}) => {
  const route = useRouter();

  const filteredCar = carsData.filter((item) => item.category === category);
  const backHandler = () => {
    route.back();
  };
  return (
    <>
      {!filteredCar.length == 0 && (
        <div className={styles.conainer}>
          <div onClick={backHandler} className={styles.back}>
            <Back />
            <p>back</p>
          </div>
          <div className={styles.cards}>
            {filteredCar.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}

      {data && (
        <div className={styles.conainer}>
          <div onClick={backHandler} className={styles.back}>
            <Back />
            <p>back</p>
          </div>
          <div className={styles.cards}>
            {data.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Carslist;
