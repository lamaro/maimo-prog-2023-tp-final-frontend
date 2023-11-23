import CardsContainer from "@/containers/CardsContainer";
import React, { useEffect, useState } from "react";
import { useCartContext } from "@/contexts/Cartcontext";

import LayoutContainer from "@/containers/LayoutContainer";
import Cart from "@/componentes/Cart"

const Helados = () => {
  const { recursos, filterRecursos } = useCartContext();
  const [slugName, setSlugName] = useState("franui")
  const handleClick = (value ="franui") => {
    filterRecursos(value);
    value==="palitos"?setSlugName("palito"): setSlugName(value)
    

  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <LayoutContainer>
        {/* Header */}
        <header className="text-center p-4">{/* Navigation here */}</header>
        {/* Main Content */}
        <main className="py-10">
       <Cart/>
        </main>
      </LayoutContainer>
    </div>
  );
};

export default Helados;
