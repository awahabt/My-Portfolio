import React from 'react'
import {Navbar, } from "./index";
import {Home, Contact} from '../pages/index';



const Container = () => {
  return (
    <div className=" text-color montserrat w-full Container z-[1] pl-[378px]  ">
      <Navbar />
      <Home/>
      

      <Contact/>
    </div>
  )
}

export default Container
