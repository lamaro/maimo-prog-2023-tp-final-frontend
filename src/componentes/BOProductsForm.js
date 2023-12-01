import React from "react";

function BOProductsForm() {


  return (
    
    <div class="lg:w-1/2 md:w-2/3 mx-auto mt-12 rounded border-solid">
    <div class="flex flex-wrap -m-2 	">
      <div class="p-2 w-1/2">
        <div class="relative">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Nombre
          </label>
          <select class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <option value="someOption">A</option>
            <option value="otherOption">B</option>
          </select>
        </div>
      </div>
      
  
      <div class="p-2 w-1/2 ">
        <div class="relative">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Tipo
          </label>
          <select class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <option value="otherOption">Pote</option>
            <option value="someOption">Palito</option>
            <option value="otherOption">Franui</option>
          </select>
        </div>
      </div>
      <div class="p-2 w-full">
        <div class="relative">
          <label for="message" class="leading-7 text-sm text-gray-600">
            Descripción
          </label>
          <input
            type="text"
            id="text"
            name="text"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
     
      <div class="p-2 w-full">
        <div class="relative">
          <label for="message" class="leading-7 text-sm text-gray-600">
            Imagen
          </label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      
      <div class="p-2 w-full">
        <button class="flex mx-auto text-white verdetgbg border-0 mt-4 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg">
          Crear
        </button>
      </div>
      
    </div>
  </div>
  );
}

export default BOProductsForm;

//* Empresa (req) * Responsable (req - responsable asignado al usuario logueado) * Hs. invertidas (opc) * Descripción (req) * Notificar a (opc) * Detalle de tarea (opc) * Estado (req. Defecto: 'P') Opciones: P|1.Pendiente|E|2.En proceso|S|3.Stand by|C|4.Cumplida|X|5.Cancelada|L|6.Pend. cliente|I|7.Pend. Itris
//rad rad text area rad area rad
