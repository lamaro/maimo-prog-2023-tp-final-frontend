import React from 'react'
import { useCartContext } from "@/contexts/Cartcontext";
import ProductCard from '@/componentes/ProductCard';

const CardsContainer = () => {
    const  {recursos} = useCartContext();
    return (
       
          
        <div className='grid grid-cols-4 px-10 gap-4'>
            {recursos.length > 0 ? recursos.map((prod, index) => {
                return (
                    <ProductCard product={prod} key={index} />
                )
            }) : <span>No Hay RECURSOS</span>}

        </div>
        
        
    )
}

export default CardsContainer