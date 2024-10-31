import React from "react";
import CountryItem from "./CountryItem";
import style from "./countryList.module.css";

function CountryList({ countries = [] }) {
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

export default CountryList;
