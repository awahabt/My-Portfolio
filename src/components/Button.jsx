import React from 'react'
import { chat } from '../assets'

const Button = () => {
  return (
    <button className="flex items-center bg-btn montserrat font-bold rounded-lg py-[10px] px-8 gap-2 text-[#040303]">
        Let's Talk
        <img src={chat} alt="chat" className="text-[#1E1E1E]" />
    </button>
  )
}

export default Button
