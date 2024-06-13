import React from "react";
import Navbar from "./Navbar";
import { Work, download } from "../assets";

const Header = () => {
  return (
    <div className=" text-color montserrat sidebar header z-[1] w-full">
      <Navbar />

      <div className="max-w-[865px]  ">
        <p className="text-7xl font-bold  ">I’m Abdul Wahab Tahir Passionate Software Engineer</p>
        <div className="flex flex-wrap gap-20">
          <button className="flex gap-3 items-center ">My Work <img src={Work} alt="Work" /></button>
          <button className="flex gap-3 items-center">Download CV <img src={download} alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
