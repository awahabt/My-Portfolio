import React from "react";
import { chat } from "../assets";
import { Contact } from "../pages";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
    <Link to="contact">
      <button className="flex items-center bg-btn montserrat font-[400] rounded-lg py-[10px] px-8 gap-2 text-[#040303]">
        Get in Touch
        <img src={chat} alt="chat" className="text-[#1E1E1E]" />
      </button></Link>
    </>
  );
};

export default Button;
