import React from 'react'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Courses from './Courses'
import ProductsList from './ProductsList'
import Whatsapp from './Whatsapp'

const Main = () => {
  return (
    <div>
        <Whatsapp/>
        <AboutUs/>
        <ProductsList/>
        <Courses/>
        <Contact/>
    </div>
  )
}

export default Main