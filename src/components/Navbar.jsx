import React from 'react';
import { NavLinks } from "../index";

const Navbar = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className=' flex'> <img src="" alt="" /></div>
      <div>
        <ul className='flex gap-8 text-white'>
            {
              NavLinks.map( (links, index)=>(
                <li key={links.id}>{links.title}</li>
              ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
