import React from "react";

function BOProductsTable() {
  return (
    
    <div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between pb-4">

    </div>
    <table class="w-full text-sm text-left text-gray-200 dark:text-gray-800">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-100">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Descripción
                </th>
                <th scope="col" class="px-6 py-3">
                    Empresa
                </th>
                <th scope="col" class="px-6 py-3">
                    Responsable
                </th>
                <th scope="col" class="px-6 py-3">
                    Estado
                </th>
                <th scope="col" class="px-6 py-3">
                    Prioridad
                </th>
                <th scope="col" class="px-6 py-3">
                    Número
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Producto1
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100 ">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Orden a 
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Orden a 
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                Orden a 
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
             <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                orden a
                </th>
                <td class="px-6 py-4">
                    TGROUP
                </td>
                <td class="px-6 py-4">
                    Manuel Olguin
                </td>
                <td class="px-6 py-4">
                    1. Pendiente
                </td>
                <td class="px-6 py-4">
                    3. Baja
                </td>
                <td class="px-6 py-4">
                    3960
                </td>
            </tr>
        </tbody>
    </table>
    

</div>
    </div>

  );
}

export default BOProductsTable;

//* Empresa (req) * Responsable (req - responsable asignado al usuario logueado) * Hs. invertidas (opc) * Descripción (req) * Notificar a (opc) * Detalle de tarea (opc) * Estado (req. Defecto: 'P') Opciones: P|1.Pendiente|E|2.En proceso|S|3.Stand by|C|4.Cumplida|X|5.Cancelada|L|6.Pend. cliente|I|7.Pend. Itris
//rad rad text area rad area rad
