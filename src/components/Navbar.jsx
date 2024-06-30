import React, { useState } from "react";
import { NavLinks } from "../index";
import { Lightmode } from "../assets";
import Button from "./Button";


import { HiMenuAlt1 } from "react-icons/hi";


const Navbar = () => {
  let [active, setActive] = useState("");
  return (
    <div className="flex justify-between w-full  items-center">
      <div className="pl-8 flex max-[1150px]:hidden">
        <ul className="flex gap-10 text-white  ">
          {NavLinks.map((links) => (
            <a href={links.id}>
              <li
                key={links.id}
                className={`montserrat cursor-pointer btn  ${
                  active === links.id ? "activebtn" : ""
                }`}
                onClick={() => setActive(links.id)}
              >
                {links.title}
              </li>
            </a>
          ))}
        </ul>
      </div>

      <HiMenuAlt1 />

      <div className="flex   gap-8 mr-10">
        <img src={Lightmode} alt="LightMode" className="lightmode" />
        <Button />
      </div>


      {/* <HiMenuAlt1 /> */}


    </div>
  );
};

export default Navbar;
