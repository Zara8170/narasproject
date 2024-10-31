import React, { useEffect, useState } from "react";
import style from "./searchbar.module.css";
import { useNavigate } from "react-router-dom";

function Searchbar({ q }) {
  const nav = useNavigate();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onClickSearch = () => {
    if (search !== "") {
      nav(`/search?q=${search}`);
    }
  };

  const onKeyDown = (e) => {
    if (e.keycode === 13) {
      onClickSearch();
    }
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요..."
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}

export default Searchbar;
