import React from "react";
import img1 from "../img/banner-pic.jpg";
import About from "./About";
import RecatMarqure from "./reactmarqure/RecatMarqure";
import Home from "./Home/Home";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2  grid-cols-1 items-center h-screen w-screen">
      {/* card */}
      <div className="lg:bg-[#edf7f6] h-full lg:flex lg:items-center lg:justify-center">
      <Home></Home>
       
      </div>
      <div>
        <About></About>
      </div>
      
    </div>
  );
};

export default Hero;
