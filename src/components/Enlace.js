import React from 'react'

const Enlace = (param) => {
  if (param.isHeader){
    return (
        <div className='Enlaces--Header'>
            <a className='Enlaces--Header--text' href='#AboutUs'>Sobre Nosotros</a>
            <a className='Enlaces--Header--text' href='#Products'>Productos</a>
            <a className='Enlaces--Header--text' href='#Courses'>Cursos</a>
            <a className='Enlaces--Header--text' href='#Contact'>Contacto</a>
        </div>
      )
  }else{
    return (
        <div className='red'>
            <a href='https://instagram.com' className='red--icon' target='_blank'>
              <img src='/Instagram_icon.svg'/>
            </a>
            <a href='https://facebook.com' className='red--icon' target='_blank'>
              <img src='/Facebook_icon.svg'/>
            </a>
            <a href='https://api.whatsapp.com/send?phone=+542622403847' className='red--icon' target='_blank'>
              <img src='/whatsapp_icon.svg'/>
            </a>
        </div>
      )
  }
    
}

export default Enlace