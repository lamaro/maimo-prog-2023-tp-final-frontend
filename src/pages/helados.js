import CardsContainer from '@/containers/CardsContainer';
import React, { useEffect, useState } from 'react'
import { useCartContext } from '@/contexts/Cartcontext';
import { Button } from '@nextui-org/react';
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
        <div className="bg-pink-100 min-h-screen">
            {/* Header */}
            <header className="text-center p-4">
                {/* Navigation here */}
            </header>

            {/* Main Content */}
            <main className="py-10">
                {/* Title */}
                <h1 className="text-6xl font-bold text-center mb-10">helados</h1>
                {/*FILTROS*/}
                <div className='w-[90%] mx-auto grid grid-cols-3 gap-6 my-8'>
                    <Button value={"franui"} onClick={handleClick}>Franui</Button>
                    <Button value={"palitos"} onClick={handleClick}>Palitos</Button>
                    <Button value={"pote"} onClick={handleClick}>Pote</Button>
                </div>
                {/* Products Section */}
                <CardsContainer recursos={recursos} className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">

                </CardsContainer>

            </main>

            {/* Footer */}
            <footer className="bg-green-300 text-center p-4">
                {/* Footer content */}
            </footer>
        </div>
    );

}

export default helados