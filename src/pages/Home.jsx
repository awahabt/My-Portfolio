import React from 'react'
import { Work, download } from "../assets";

const Home = () => {
  return (
    <div className="max-w-[1300px] ml-8 flex flex-col justify-end gap-10 max-[621px]:gap-5 min-[1605px]:pt-[400px] min-[1226px]:pt-[280px] min-[855px]:pt-[130px] max-[655px]:ml-0 min-[621px]:pt-[80px] min-[300px]:pt-[70px]">
        <p className="flex justify-center flex-col text-[110px] font-semibold text-gradient leading-[150px] max-[850px]:text-[80px] max-[850px]:leading-[110px] max-[425px]:text-[60px] max-[425px]:leading-[90px] max-[425px]:text-center max-[340px]:text-[50px]">Abdul Wahab Tahir.<br/><span className="text-2xl font-[400]">Front-End Engineer</span></p>
        <div className="w-full flex flex-wrap gap-10 mt-8 max-[425px]:justify-center">
          <button className="flex gap-3 items-center work-btn ">My Work <img src={Work} alt="Work" /></button>
          <button className="flex gap-3 items-center download-btn">Download CV <img src={download} alt="" /></button>
        </div>
      </div>
  )
}

export default Home
