import React from "react";
import { categories, flavors } from '@/utils/dummy.js'
import BOTableLog from "@/componentes/BOTableLog";
import BOTableHead from "@/componentes/BOTableHead";
import { useBOContext } from '@/contexts/BOContext';

function BOProductsTable() {
    const { products, productsLoading, deleteProduct } = useBOContext();

  return (
    
    <div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between pb-4">
        
    </div>
    {!productsLoading && (

    <table class="w-full text-sm text-left text-gray-200 dark:text-gray-800">
        <BOTableHead elementos={Object.keys(products.products[0])} ></BOTableHead>

        <tbody>
        {products.products.map((elemento, index) => (
            <BOTableLog funcion={deleteProduct} elementos={elemento} key={index}>
        </BOTableLog>
      ))}
            
        </tbody>
    </table>
    )}
    {productsLoading && <p className='w-full flex justify-center'>Loading...</p>}

</div>
    </div>

  );
}

export default BOProductsTable;

