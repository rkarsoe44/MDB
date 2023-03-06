import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "../dist/output.css"
const Hero = () => {
  let [hero, setHero] = useState({});
  useEffect(() => {
    fetch();
  }, []);
  const Nev=useNavigate()
  const One=() => {
    Nev("/Main2")
  }
  const fetch = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/random.php`,
    );
    setHero(data.meals[0]);
  };
  return (
    <>
      <div
        className="w-full h-screen bg-amber-400 flex justify-center"
        style={{ alignItems: "center" }}
      >
        <div className="text-center p-5">
          <img
            src={hero?.strMealThumb}
            className="xl:w-[400px] sm:w-[100px] lg:w-[200px] lg:h-[200px] sm:h-[100px] rounded-3xl xl:h-[400px]"
            alt=""
          />
          <button onClick={One}
            className="px-5 py-3 w-52 text-2xl  mt-3 rounded-xl text-black bg-slate-500 hover:shadow-lg"
            style={{ wordSpacing: "10px" }}
          >
            Start!
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
