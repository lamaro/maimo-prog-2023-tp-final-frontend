import React from "react";

function BOTableHead({ elementos }) {
console.log("head", elementos)
  return (
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-100">
               

          {elementos.map((elemento, index) => (
              <th key={index} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                     {elemento}
              </th>
          ))}
</thead>
                        
                    
  );
}

export default BOTableHead;

