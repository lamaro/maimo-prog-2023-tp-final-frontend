import { useState, useEffect } from "react";
import { useCartContext } from "@/contexts/Cartcontext";
import CardsContainer from "@/containers/CardsContainer"

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

        </section>

        <section>
          
        </section>
        
        <section>
          <CardsContainer recursos={recursos}></CardsContainer>
        </section>
    </div>
  );
};

export default HomeContainer;
