import React from 'react'
import { Work, download } from "../assets";

const Home = () => {
  return (
    <div className="max-w-[865px] h-[80vh]  flex flex-col justify-end">
        <p className="text-7xl font-bold text-gradient  ">I’m Abdul Wahab Tahir Passionate Software Engineer</p>
        <div className="flex flex-wrap gap-10 mt-8">
          <button className="flex gap-3 items-center work-btn ">My Work <img src={Work} alt="Work" /></button>
          <button className="flex gap-3 items-center download-btn">Download CV <img src={download} alt="" /></button>
        </div>
      </div>
  )
}

export default Home
