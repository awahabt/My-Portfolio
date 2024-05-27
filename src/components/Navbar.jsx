import React from 'react';
import { NavLinks } from "../index";

const Navbar = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className=' flex'> <img src="" alt="Logo" /></div>
      <div >
        <ul className='flex gap-10 text-white my-8 mx-5'>
            {
              NavLinks.map( (links)=>(
                <li key={links.id} className='btn'>{links.title}</li>
              ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
