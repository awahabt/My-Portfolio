import React, { useState } from "react";
import { NavLinks } from "../index";
import { Lightmode } from "../assets";
import Button from "./Button";


import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  let [active, setActive] = useState("home");
  return (
    <div className="flex justify-between w-full items-center border">
      <div className="pl-8 flex max-[1150px]:hidden">
        <ul className="flex gap-10 text-white  ">
          {NavLinks.map((links) => (
            <NavLink to={links.id} key={links.id}>
              <li
                
                className={`montserrat cursor-pointer btn  ${
                  active === links.id ? "activebtn" : ""
                }`}
                onClick={() => setActive(links.id)}
              >
                {links.title}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>

      <HiMenuAlt1 className=" min-[1150px]:hidden" />

      <div className="flex gap-8 mr-10">
        <img src={Lightmode} alt="LightMode" className="lightmode" />
        <Button />
      </div>


      {/* <HiMenuAlt1 /> */}


    </div>
  );
};

export default Navbar;
