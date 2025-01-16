import Categories from "../../../components/module/Categories";
import SearchBar from "../../../components/module/SearchBar";
import CarPage from "../../../components/templates/CarPage";
import carsData from "../../../data/carsData";
const Details = () => {
  return (
    <>
      <SearchBar />
      <Categories />
      <CarPage data={carsData} />
    </>
  );
};

export default Details;
