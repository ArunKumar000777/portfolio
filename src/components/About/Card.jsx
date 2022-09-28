import React from 'react'
import {AiOutlineProject} from 'react-icons/ai'

const Card = () => {
  return (
    <div className='card__container'>
        <a href="" className='icon'><AiOutlineProject/></a>
        <h5>Projects</h5>
        <p>5 Completed</p>
    </div>
  )
}

export default Card