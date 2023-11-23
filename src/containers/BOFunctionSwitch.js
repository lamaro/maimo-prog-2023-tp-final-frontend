import React, { useState } from 'react';
import BOOrdersContainer from '@/containers/BOOrdersContainer';
import BOProductsContainer from '@/containers/BOProductsContainer';
function BOFunctionSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  // Step 5: Event handler to update the state variable when the checkbox changes
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <section class="text-gray-600 bg-white body-font relative">
      
      <div class="container px-5  mx-auto">
      <div class="flex justify-center mb-2 borde pb-10">
          <label
            for="Toggle3"
            className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
            <input id="Toggle3" type="checkbox" className="hidden peer" checked={isChecked} onChange={handleCheckboxChange} />
            <span className="py-2 rounded-l-md px-16  text-white bg-gray-500 peer-checked:bg-gray-300 peer-checked:text-black">
              Orders
            </span>
            <span className=" py-2 rounded-r-md px-16  bg-gray-300 text-black peer-checked:bg-gray-500 peer-checked:text-white">
              Products
            </span>
          </label>
        </div>
       
        {isChecked ? <BOProductsContainer></BOProductsContainer> : <BOOrdersContainer></BOOrdersContainer>}
      </div>
    </section>
  );
}

export default BOFunctionSwitch;
