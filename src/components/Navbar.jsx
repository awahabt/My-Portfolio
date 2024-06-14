import React from 'react';
import { NavLinks } from "../index";
import { Lightmode } from '../assets';
import Button from './Button';

const Navbar = () => {
  return (
    <div className='flex justify-between w-full  items-center'>
      <div className="pl-8 flex" >
        <ul className='flex gap-10 text-white  '>
            {
              NavLinks.map( (links)=>(
                <li key={links.id} className="montserrat cursor-pointer btn">{links.title}</li>
              ))
            }
        </ul>
      </div>
      <div className="flex float-right  gap-8 mr-10">
        <img src={Lightmode} alt="LightMode" />
        <Button/>
      </div>
    </div>
  )
}

export default Navbar
