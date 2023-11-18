import { useCartContext } from "@/contexts/Cartcontext";
import CardsContainer from "@/containers/CardsContainer";
import { useState, useEffect } from "react";
import Hero from "@/componentes/Hero";
import Conocenos from "@/componentes/Conocenos";
import Form from "@/componentes/Form";

const HomeContainer = () => {
  const { products, lodingProducts } = useCartContext();
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    console.log(products)
    let productosMasVendidos = []
    if (products) {
      productosMasVendidos = [...products.franui.options, ...products.palito.options, ...products.pote.options]
      console.log(productosMasVendidos)
    }
    setRecursos(productosMasVendidos)
  }, [products]);

  return (
    <div>

      <section>
      <Hero />
      </section>
      <Conocenos />
      <section>
      <h1 className=' mb-6  font-medium text-center  md:text-3xl xl:text-6xl text-black'>Los más pedidos</h1>
        <CardsContainer recursos={recursos}></CardsContainer>
      </section>
      <section>
      <Form />
      </section>
    </div>
  );
};

export default HomeContainer;
