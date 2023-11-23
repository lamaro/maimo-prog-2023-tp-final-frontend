import CardsContainer from "@/containers/CardsContainer";
import React, { useEffect, useState } from "react";
import { useCartContext } from "@/contexts/Cartcontext";
import { Button } from "@nextui-org/react";
import LayoutContainer from "@/containers/LayoutContainer";

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
          {/* Title */}
          <h1 className="text-6xl font-bold text-center mb-10">
            Productos Gelatella
          </h1>
          {/*FILTROS*/}
          <div className='flex my-8 justify-center'>
            <Button className="hover:bg-violet-600" value={"franui"} variant="light" onClick={() => handleClick("franui")}>Gelatella x Franui</Button>
            <Button value={"palitos"} variant="light" onClick={() => handleClick("palitos")}>Gelatella x Palitos</Button>
            <Button value={"pote"} variant="light" onClick={() => handleClick("pote")}>Gelatella x Pote</Button>
          </div>
          {/* Products Section */}
          <CardsContainer
            recursos={recursos}
            slug={slugName}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4"
          ></CardsContainer>
        </main>
      </LayoutContainer>
    </div>
  );
};

export default Helados;
