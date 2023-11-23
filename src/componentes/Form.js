import React from 'react'
import {Input} from "@nextui-org/react";


const Form = () => {
  const variants = ["flat", "bordered", "underlined", "faded"];

  return (
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-48 text-black font-light tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">¿Queres <span class="text-colorVerde"> aprender </span> a hacer tu propio heladito?</h1>
        <h4 class="max-w-2xl mb-6 text-xl font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">No te pierdas nuestros correos quincenales! Damos tips, recetas, mezclas y buena onda para que hagas tus propios helados. </h4>
        <h4 class="max-w-2xl mb-6 text-xl font-light text-colorVerde lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">PD: mandanos una foto cuando lo hagas </h4> 
    </div>
    <div class="border border-b-2 border-colorVerde lg:mt-0 lg:col-span-5 lg:flex">
    <form>
        <div className="mt-6 relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-600 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="escribi tu nombre aca"
          />
          <label
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-colorVerde transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-colorVerde peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            NOMBRE
          </label>
        </div>
        <div className='mt-4 ml-4 mb-4 border-b border-neutral-300 '></div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  text-gray-600 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Mail "
          />
          <label
            className="  pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-colorVerde transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-colorVerde peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            MAIL 
          </label>
          <div className='mt-4 ml-4 border-b border-neutral-300 '></div>
        </div>
        <button
          type="submit"
          class=" ml-4 mr-8 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-b-2 border-black p-4"

        >
           <svg
              class="w-5 h-5 -ml-1 mr-3"
              fill="#DC58A6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
           SUSCRIBIRME
        </button>
      </form>

    </div>                
</div>
  )
}

export default Form