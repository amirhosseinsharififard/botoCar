import {useRouter} from "next/router";
import React from "react";
import carsData from "../../../data/carsData";
import CarDetails from "../../../components/templates/CarDetails";
const CarId = () => {
  const carId = useRouter().query.carId;
  console.log(carId);
  const carData = carsData[carId - 1];
  console.log(carData);
  return <CarDetails {...carData} />;
};

export default CarId;
