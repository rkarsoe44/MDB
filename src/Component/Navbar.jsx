import React, { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import "../dist/output.css"

const Navbar = () => {
  const navi = useNavigate();

  const [Input, setInput] = useState("");
  const Hello = (e) => {
    e.preventDefault();
    navi("search/" + Input);
  };
  return (
    <>
      <div className="bg-slate-50 shadow-lg flex p-3  justify-around items-center">
        <div className="flex items-center">
          <a href="/">
            <FaHome className="text-5xl c " />
          </a>
          <a href="/Main2">
            <IoFastFoodOutline className="text-5xl c" />
          </a>
          <h1 className="b">Tasty Food</h1>
        </div>
        <form action="" onSubmit={Hello}>
          <input
            type="text"
            value={Input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="h-9 rounded md:w-40 xl:w-60 lg-60 B pl-5 hover:shadow-md"
          />
        </form>
      </div>
    </>
  );
};

export default Navbar;
