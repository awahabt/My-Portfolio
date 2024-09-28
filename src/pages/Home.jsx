import React from 'react'
import { Work, download } from "../assets";

const Home = () => {
  return (
    <div className="max-w-[1300px] h-[85vh] mx-8 flex flex-col justify-end gap-10">
        <p className="flex justify-center flex-col text-[110px] font-semibold text-gradient leading-[150px]">Abdul Wahab Tahir.<br/><span className="text-2xl font-[400]">Front-End Engineer</span></p>
        <div className="flex flex-wrap gap-10 mt-8">
          <button className="flex gap-3 items-center work-btn ">My Work <img src={Work} alt="Work" /></button>
          <button className="flex gap-3 items-center download-btn">Download CV <img src={download} alt="" /></button>
        </div>
      </div>
  )
}

export default Home
