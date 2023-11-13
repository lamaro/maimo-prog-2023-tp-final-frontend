import React from 'react'
import { useCartContext } from "@/contexts/Cartcontext";
import { useState, useEffect } from "react";
import ProductCard from '@/componentes/ProductCard';

const CardsContainer = () => {
    const { products, lodingProducts } = useCartContext();
    const [heladoPalito, setHeladoPalito] = useState([]);
    const [heladoPote, setHeladoPote] = useState([]);
    const [heladoFranui, setHeladoFranui] = useState([]);
    //const productosFiltradosPalito = products.filter(producto=>producto.type === producto.type.includes("palito") )
    useEffect(() => {
        const palitoHelado = products.filter((el) => el.type.includes("palito"));
        console.log(palitoHelado, "palito");
        const poteHelado = products.filter((el) => el.type.includes("pote"));
        console.log(poteHelado, "pote");
        const franuiHelado = products.filter((el) => el.type.includes("franui"));
        console.log(franuiHelado, "franui");
    
        setHeladoPalito(palitoHelado);
        setHeladoPote(poteHelado);
        setHeladoFranui(franuiHelado);
      }, [products]);
    
  return (
    <div>
        <ProductCard product={heladoPalito}/>
        <ProductCard product={heladoPote}/>
        <ProductCard product={heladoFranui}/>
        
       
    </div>
  )
}

export default CardsContainer