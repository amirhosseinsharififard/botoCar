import Carslist from "../../../components/templates/Carslist";
import carsData from "../../../data/carsData";
import {useRouter} from "next/router";
const Slugs = () => {
  const router = useRouter();
  const [min, max] = router.query.slugs || [];
  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  console.log(filteredData)
  if (!filteredData) return <h3>notFound</h3>;
  return<Carslist data={filteredData}/>
};

export default Slugs;
