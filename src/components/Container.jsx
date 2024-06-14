import React from 'react'
import Navbar from "./Navbar";
import { Work, download } from "../assets";
import Contact from "../pages/Contact"

const Container = () => {
  return (
    <div className=" text-color montserrat w-full Container z-[1] pl-[350px]  ">
      <Navbar />

      <div className="max-w-[865px] ml-7">
        <p className="text-7xl font-bold text-gradient  ">I’m Abdul Wahab Tahir Passionate Software Engineer</p>
        <div className="flex flex-wrap gap-10 mt-8">
          <button className="flex gap-3 items-center work-btn ">My Work <img src={Work} alt="Work" /></button>
          <button className="flex gap-3 items-center download-btn">Download CV <img src={download} alt="" /></button>
        </div>
      </div>

      <Contact/>
    </div>
  )
}

export default Container
