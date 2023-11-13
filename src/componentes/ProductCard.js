import React from 'react'
import CardsContainer from '@/containers/CardsContainer'


const ProductCard = ({product}) => {
    const {name, description, image, units} = product;
  return (
    <div>
        <p>{image}</p>
        <p>{name}</p>
        <p>{units}</p>
        <p>{description}</p>
        <p>ver mas</p>
    </div>
  )
}

export default ProductCard