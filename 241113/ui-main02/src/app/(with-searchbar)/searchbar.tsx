"use client";
import React, { useState } from "react";

const Searchbar = () => {
  const [search, setSeach] = useState("");
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeach(e.target.value);
  };
  return (
    <div>
      <input value={search} type="text" onChange={onChangeSearch} />
      <button>검색</button>
    </div>
  );
};

export default Searchbar;
