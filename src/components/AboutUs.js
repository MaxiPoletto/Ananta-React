import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Button } from 'reactstrap'

const AboutUs = () => {
  return (
    <section className='Aboutus'>
      <div className='Aboutus--info'>
        <h2 id='AboutUs'>Sobre Nosotros</h2>
        <LoremIpsum p={1}/>
      </div>
    </section>
  )
}

export default AboutUs