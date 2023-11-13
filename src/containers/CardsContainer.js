import React from 'react'
import { useCartContext } from "@/contexts/Cartcontext";
import ProductCard from '@/componentes/ProductCard';

const CardsContainer = () => {
    const { products, lodingProducts } = useCartContext();
    const productosFiltrados = products.filter(producto=>producto.type !== producto.type.includes("additional topping") && producto.type !== producto.type.includes("additional salsa") && producto.type !== producto.type.includes("additional cucurucho") )
  return (
    <div>
       {productosFiltrados?.map(producto=>{
        return(
            <ProductCard product={producto}/>
        )
       })}
    </div>
  )
}

export default CardsContainer