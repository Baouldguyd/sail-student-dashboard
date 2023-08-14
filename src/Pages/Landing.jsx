import React from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className=" w-screen h-screen flex flex-col gap-48 bg-gray-800">
      <Nav />

      <div className=" grid place-content-center gap-4">
        <h1 className=" text-4xl font-bold text-white">
          Welcome To Sail Student Management Portal
        </h1>
        <Link to='/dashboard'>
        <button className=" w-40 h-10 rounded-md text-slate-200 px-2 bg-blue-600 text-sm">
          Proceed to dashboard
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
