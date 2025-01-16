import AllButton from "../../components/module/AllButton";
import Categories from "../../components/module/Categories";
import SearchBar from "../../components/module/SearchBar";
import CarPage from "../../components/templates/CarPage";
import carsData from "../../data/carsData";
const HomeIndex = () => {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButton/>
      <CarPage data={cars} />
    </>
  );
};

export default HomeIndex;
