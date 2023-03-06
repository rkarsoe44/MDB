import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import "./Card.css"
import "../../dist/output.css"
const Card = ({ image, name, id }) => {
  const Navigate = useNavigate();
  const Hell=() => {
    Navigate(`detail/${id}`)
  }
  return (
    <>
      <div className="relative Hover">
        <div onClick={Hell} className="absolute top-[35%] left-[43%] w-[50px] h-[50px] z-[-1] flex mx-auto items-center  rounded-3xl bg-orange-400 Hover2">
            <BsSearch className="text-2xl  w-[100%] text-white " />
        </div>
        <img
          src={image}
          className="h-[300px] w-[300px] rounded-2xl img"
          alt=""
        />
        <p className="text-center text-[18px] mt-4">{name}</p>
      </div>
    </>
  );
};
export default Card;
