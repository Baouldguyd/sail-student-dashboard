import React from "react";
import logo from "../Assets/Sail logo.png";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className=" container md:flex justify-between px-8 max-width py-2 ">
      <img className=" w-36" src={logo} alt="" />
      <Link to="/signin">
        <button className=" w-20 h-8 rounded-md text-slate-200 px-2 bg-blue-600 text-sm">
          Sign in
        </button>
      </Link>
    </div>
  );
};

export default Nav;
