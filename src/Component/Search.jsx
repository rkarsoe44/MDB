import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "./Card.css"
import "../dist/output.css"

const Search = () => {
  const { name } = useParams();
  const [search, setSearch] = useState();
  const FetchData = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    );
    setSearch(data.meals[0]);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div
      className="flex w-full h-[88vh] align-middle"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <div className="text-center sec">
        <img
          src={search?.strMealThumb}
          className="xl:w-[400px]  rounded-lg lg:w-[400px] md:w-[200px] sm:w-[200px] xl:h-[400px] lg:h-[400px] md:h-[200px] sm:h-[200px]"
          alt=""
        />
        <h1 className="text-center text-3xl mt-3">{search?.strMeal}</h1>
      </div>
    </div>
  );
};

export default Search;
