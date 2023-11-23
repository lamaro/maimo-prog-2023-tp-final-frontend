import React from "react";
import { products, categories, flavors } from '@/utils/dummy.js'
import BOTableLog from "@/componentes/BOTableLog";
import BOTableHead from "@/componentes/BOTableHead";
import { useBOContext } from '@/contexts/BOContext';

function BOOrdersTable() {
  const { orders, ordersLoading, deleteOrder} = useBOContext();

  return (
    
    <div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between pb-4">
        
    </div>
    {!ordersLoading && (

    <table class="w-full text-sm text-left text-gray-200 dark:text-gray-800">
        <BOTableHead elementos={Object.keys(orders.orders[0])} ></BOTableHead>

        <tbody>
        {orders.orders.map((elemento, index) => (
            <BOTableLog funcion={deleteOrder} elementos={elemento} key={index}>
        </BOTableLog>
      ))}
        </tbody>
    
    </table>
    )}
    {ordersLoading && <p className='w-full flex justify-center'>Loading...</p>}
    

</div>
    </div>

  );
}

export default BOOrdersTable;
