import React from "react";
import LayoutContainer from "@/containers/LayoutContainer";
import Cart from "@/componentes/Cart"


const compra = () => {
    return (
        <div className="bg-amber-50 min-h-screen">
        <LayoutContainer>
          {/* Header */}
          <header className="text-center p-4">{/* Navigation here */}</header>
          {/* Main Content */}
          <main className="py-10">
            <div>
                <h2>subtotal</h2>
                <p>Total: ${calcularPrecioFinal()}</p>
            </div>
          </main>
        </LayoutContainer>
      </div>
    )
  }
  
  export default compra