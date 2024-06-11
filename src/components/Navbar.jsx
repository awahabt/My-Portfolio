import React from 'react';
import { NavLinks } from "../index";

const Navbar = () => {
  return (
    <div className='flex justify-between w-full sidebar'>
      <div className="pl-8" >
        <ul className='flex gap-10 text-white my-8 mx-5'>
            {
              NavLinks.map( (links)=>(
                <li key={links.id} className="montserrat cursor-pointer btn">{links.title}</li>
              ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
