import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import CountryList from "../components/CountryList";
import { fetchCountris } from "../api";
import style from "./home.module.css";

function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountris();
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={style.container}>
      <Searchbar />
      <CountryList countries={countries} />
    </div>
  );
}

export default Home;
