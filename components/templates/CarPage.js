import Card from "../module/Card";
import styles from "./CarPage.module.css";

const CarPage = ({data}) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car}/>
      ))}
    </div>
  );
};

export default CarPage;
