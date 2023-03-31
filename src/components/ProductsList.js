import React from 'react'
import Tarjetas from './Tarjetas'


const ProductsList = () => {
  return (
    <div className='ProductList' id='Products'>
      <Tarjetas isProduct={true}/>
    </div>
  )
}

export default ProductsList