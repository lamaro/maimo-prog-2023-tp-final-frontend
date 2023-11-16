import React, { useState } from 'react';
import BOProductsForm from '@/componentes/BOProductsForm';
import BOProductsTable from '@/componentes/BOProductsTable'
export default function BOFunctionSwitch() {
  const [formOpen, setFormOpen] = useState(false);
  const [btnText, setBtnText] = useState("Agregar productos");

  // Step 5: Event handler to update the state variable when the checkbox changes
  const handleFormOpen = (event) => {
    setFormOpen(!formOpen);
    if(!formOpen){
      setBtnText("Ver productos")
    }
    else{
      setBtnText("Agregar productos");
    }
  };
  return (
    <section class="text-gray-600 bg-white body-font relative">
      
      <div class="container px-5  mx-auto">
      <div class="mb-2 borde pb-10">
          <label
            
            className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
            <button  onClick={handleFormOpen}/>
            <span className="py-2 rounded-md px-16  text-white  bg-gray-500">
              {btnText}
            </span>
          </label>
        </div>
       
        {formOpen ? <BOProductsForm></BOProductsForm> : <BOProductsTable></BOProductsTable>}
      </div>
    </section>
  );
}

