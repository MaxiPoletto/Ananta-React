import React from 'react'
import Enlace from './Enlace';

const Footer = () => {
  return (
    <div className='Footer'>
        {/* <h5 className='Footer--tittle'>Informacion</h5> */}
        <Enlace/>
        <div className='Footer--content'>
          <p className='Footer--content--text Footer--content--border'>ananta@gmail.com</p>
          <p className='Footer--content--text Footer--content--border'>2622403847</p>
          <p className='Footer--content--text'>Bernardo Quiroga 1085 San Carlos MENDOZA</p>
        </div>
    </div>
  )
}

export default Footer