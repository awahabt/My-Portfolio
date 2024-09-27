import React from 'react'
import { Work, download } from "../assets";

const Home = () => {
  return (
    <div className="max-w-[865px] h-[80vh] mx-10 flex flex-col justify-end max-[970px]:max-w-[750px] max-[800px]:max-w-[650px] max-[750px]:items-center max-[750px]:text-center max-[500px]:max-w-[400px] max-[500px]:items-center max-[500px]:text-center border">
        <p className="text-7xl font-bold text-gradient max-[970px]:text-6xl max-[970px]:leading-[80px]  ">I’m<br/>Abdul Wahab Tahir<br/>Passionate Software Engineer</p>
        <div className="flex flex-wrap gap-10 mt-8">
          <button className="flex gap-3 items-center work-btn ">My Work <img src={Work} alt="Work" /></button>
          <button className="flex gap-3 items-center download-btn">Download CV <img src={download} alt="" /></button>
        </div>
      </div>
  )
}

export default Home
