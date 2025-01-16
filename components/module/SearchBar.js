import {useRouter} from "next/router";
import styles from "./SearchBar.module.css";
import {useState} from "react";

const SearchBar = () => {
  const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const buttonHandler = () => {
    if (min && max) {
      router.push(`/filters/${min}/${max}`);
    } else {
      alert("Please enter both min and max values");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder='enter min-price'
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder='enter max-price'
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={buttonHandler}>search</button>
    </div>
  );
};

export default SearchBar;
