import React from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{AiOutlineProject} from 'react-icons/ai'
import{AiOutlineMessage} from 'react-icons/ai'
import {BiBrain} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>{setActive('#')}} className={active==="#"?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActive('#about')}} className={active==="#about"?'active':''}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>{setActive('#skills')}} className={active==="#skills"?'active':''}><BiBrain/></a>
      <a href="#project" onClick={()=>{setActive('#project')}} className={active==="#project"?'active':''}><AiOutlineProject/></a>
      <a href="#contact" onClick={()=>{setActive('#contact')}} className={active==="#contact"?'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav