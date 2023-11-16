import React from 'react'
import { useCartContext } from "@/contexts/Cartcontext";
import { useState, useEffect } from "react";
import ProductCard from '@/componentes/ProductCard';

const CardsContainer = ({ recursos }) => {


    return (
        <div>
            <h1 className=' mb-6  font-medium text-center  md:text-5xl xl:text-6xl text-black'>Los más pedidos</h1>
        <div className='grid grid-cols-4 px-10 gap-4'>
            {recursos.length > 0 ? recursos.map((prod, index) => {
                return (
                    <ProductCard product={prod} key={index} />
                )
            }) : <span>No Hay RECURSOS</span>}

        </div>
        </div>
        
    )
}

export default CardsContainer