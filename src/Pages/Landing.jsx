import React from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import Image from '../Assets/BG.jpg'

const Landing = () => {

  const opacity = 50;

  const backgroundImageStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    opacity: opacity
  };
  return (
    <div className=" w-screen h-screen flex flex-col">
      <Nav />

      <div className=" grid place-content-center gap-4 h-screen" 
      style={backgroundImageStyle}>
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <h1 className=" text-6xl font-extrabold text-black">
          Welcome To Sail Student Management Portal
        </h1>
        <Link to='https://sailab.ng'>
        <button className=" rounded-md text-slate-200 px-4 py-3 bg-blue-600 text-xl">
          Learn more about Sail
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
