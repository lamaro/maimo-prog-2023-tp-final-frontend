import CardsContainer from '@/containers/CardsContainer';
import React, { useEffect, useState } from 'react'
import { useCartContext } from '@/contexts/Cartcontext';
import { Button } from '@nextui-org/react';
import LayoutContainer from '@/containers/LayoutContainer';

const helados = () => {
    const { products, lodingProducts } = useCartContext();
    const [recursos, setRecursos] = useState([]);

    useEffect(() => {
        console.log(products)
        let productosDefault = []
        if (products) {
            productosDefault = products.franui.options
        }

        setRecursos(productosDefault)
    }, [products]);

    const handleClick = (e) => {
        const { value } = e.target
        console.log("value", value)
        switch (value) {
            case "franui":
                setRecursos(products.franui.options)
                break
            case "palitos":
                setRecursos(products.palito.options)
                break
            case "pote":
                setRecursos(products.pote.options)
                break
        }
    }

    return (
        
        <div className="bg-amber-50 min-h-screen">
            <LayoutContainer>
                {/* Header */}
                <header className="text-center p-4">
                    {/* Navigation here */}
                </header>
                {/* Main Content */}
                <main className="py-10">
                    {/* Title */}
                    <h1 className="text-6xl font-bold text-center mb-10">Productos Gelatella</h1>
                    {/*FILTROS*/}
                    <div className='flex my-8 justify-center'>
                        <Button className="hover:bg-violet-600" value={"franui"} variant="light" onClick={handleClick}>Gelatella x Franui</Button>
                        <Button value={"palitos"} variant="light" onClick={handleClick}>Gelatella x Palitos</Button>
                        <Button value={"pote"} variant="light" onClick={handleClick}>Gelatella x Pote</Button>
                    </div>
                    {/* Products Section */}
                    <CardsContainer recursos={recursos} className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                    </CardsContainer>
                </main>
            </LayoutContainer>
        </div>
    );

}

export default helados