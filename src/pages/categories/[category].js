import {useRouter} from "next/router";
import Carslist from "../../../components/templates/Carslist";

const Category = () => {
  const route = useRouter().query.category;
  return <Carslist category={route} />;
};

export default Category;
