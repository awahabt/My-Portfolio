import React from 'react'
import { chat } from '../assets'

const Button = () => {
  return (
    <div className="flex bg-btn montserrat font-bold rounded-full py-[14px] px-10 gap-2 text-[#1E1E1E]">
        Let's Talk
        <img src={chat} alt="chat" className="text-[#1E1E1E]" />
    </div>
  )
}

export default Button
