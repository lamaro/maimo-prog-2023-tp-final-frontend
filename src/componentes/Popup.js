import React from "react";
import Link from "next/link";
import { Link as NextUILink } from "@nextui-org/react";
import { display } from "@mui/system";
import { useState } from "react";

const Popup = ({ producto, gusto, precio, seguirComprando }) => {
  const seguirCompra = () => {
    seguirComprando(); // Llama a la función para seguir comprando
  };
  return (
    <div
      className={`flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full max-h-full 
      `}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              1 Producto fue agregado al carrito
            </h3>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500">
              {producto} de {gusto}
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              A ${precio}
            </p>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-end">
            <button
              type="button"
              onClick={seguirCompra}
              className="text-white bg-[#C8D89B] hover:bg-[#B0BF85] font-medium text-sm px-5 py-2.5 text-center"
            >
              Seguir Comprando
            </button>
            <Link
              type="button"
              href="/checkout"
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900"
            >
              Terminar Pedido
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
