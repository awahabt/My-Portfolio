import React from 'react';
import { Logo } from '../assets';
import { SocialLinks } from '../index';
import Button from './Button';

const Sidebar = () => {
  return (
    <div className="w-[330px] h-[90vh] sidebar fixed justify-between items-center flex flex-col bg-component z-[2] py-8 backdrop-blur-sm max-[1475px]:hidden">
      <div className=" flex gap-10 mt-10 items-center justify-between max-w-[245px] ">
        <img src={Logo} alt="Logo" className="h-20 text-color" />
        <h2 className=" text-color text-4xl font-bold montserrat max-w-[155px] h-[120px]">ABDUL WAHAB TAHIR</h2>
      </div>
      <div className="max-w-[230px]">
        <p className="text-color text-2xl font-semibold montserrat">Passionate Software Engineer</p>
      </div>
      <div className="flex flex-col items-center justify-between h-[120px] ">
        <div className="flex gap-6 px-5">
          {SocialLinks.map((img, index)=>(
            <a href={img.link}><img src={img.icon} key={img.id} className="h-[30px] text-color w-[30px]"/></a>
          ))}
        </div>
        
          <Button/>
        
      </div>
    </div>
  )
}

export default Sidebar
