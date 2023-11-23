import React from "react";

function BOTableLog({ funcion, elementos }) {
  const handleEliminarClick = () => {
    // Call the provided function when the "Eliminar" header is clicked
    if (funcion) {
      console.log(Object.values(elementos)[0])
      funcion(Object.values(elementos)[0]);
    }
  };
  

    const arrayFromJson = Object.values(elementos);
  return (
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                    {arrayFromJson.map((elemento, index) => (
                        <th key={index} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                                {Array.isArray(elemento) ? `${elemento.length}` : elemento}
                        </th>
                    ))}
                    <th scope="row" id={1}  onClick={handleEliminarClick}  className="px-6 py-4 font-medium text-blue-900 bold whitespace-nowrap dark:text-blue-900">
                               ELIMINAR
                        </th>
              </tr>
  );
}

export default BOTableLog;

