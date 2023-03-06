import axios from "axios";
import { BsYoutube } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import "./Card.css";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [DE, setDE] = useState({});
  const { id } = useParams();
  const [Inge, setInge] = useState([]);
  const [DEV, setDEV] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  useEffect(() => {
    const Add = [
      { id: 1, name: DE?.strIngredient1 },
      { id: 2, name: DE?.strIngredient2 },
      { id: 3, name: DE?.strIngredient3 },
      { id: 4, name: DE?.strIngredient4 },
      { id: 5, name: DE?.strIngredient5 },
    ];
    setInge(Add);
  }, [DEV]);
  console.log(Inge);
  useEffect(() => {
    FetchData();
  }, [DEV]);
  const FetchData = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    setDE(data?.meals[0]);
  };
  return (
    <div
      className="lg:flex md:block xl:w-full xl:h-[88vh]  sm:w-full sm:p-3 d"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <img
        src={DE?.strMealThumb}
        className="xl:w-[500px]  xl:h-[500px] sm:w-52 md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] sm:h-52"
        alt=""
      />
      <div className="xl:ml-10 md:ml-0 sm:ml-0 md:p-2 sm:p-2 ">
        <h1 className="text-4xl lg:w-[400px]">
          {DE?.strMeal}
        </h1>
        <h1 className="text-3xl mt-3">{DE?.strArea}</h1>
        <div className="flex mt-3">
          <button
            className={`mr-3 ${activeTab === "instructions" ? "activeDetail" : ""} ${
              activeTab === "instructions" ? "bg-orange-500" : "bg-slate-400"
            } px-8 py-2 bg-orange-500 rounded-lg text-white text-lg`}
            onClick={() => setActiveTab("instructions")}
          >
            instructions
          </button>
          <button
            className={`${
              activeTab === "ingredents" ? "activeDetail" : ""
            } px-8 py-2 ${
              activeTab === "ingredents" ? "bg-orange-500" : "bg-slate-400"
            } rounded-lg text-white text-lg`}
            onClick={() => setActiveTab("ingredents")}
          >
            ingredents
          </button>
        </div>
        {activeTab === "instructions" && (
          <p className="xl:w-[550px] md:w-[280px]">{DE?.strInstructions}</p>
        )}
        {activeTab === "ingredents" && (
          <ol>
            {Inge?.map((ing) => {
              return <li key={ing?.id}>{ing?.name}</li>;
            })}
          </ol>
        )}
        <a href={DE?.strYoutube} target="_blank">
          <BsYoutube className="text-4xl text-red-500 mt-3" />
        </a>
      </div>
    </div>
  );
};

export default Detail;
