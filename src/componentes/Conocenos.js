import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Conocenos = () => {
  return (
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class=" max-w-2xl mb-4 text-4xl font-light tracking-wider leading-none md:text-5xl xl:text-6xl text-colorVerde text-96 italic ">Helado ARG.</h1>
            <p class="ml-9 max-w-2xl mb-6 font-light text-black lg:mb-8 text-20 md:text-lg lg:text-xl dark:text-gray-400">Descubrí una amplia gama de sabores naturales y artesanales, elaborados con ingredientes frescos. Nuestra pasión por el helado se refleja en cada detalle y en nuestra constante búsqueda de sabores únicos.</p>
            
            <Link
            href="/about"
            class=" ml-9 mr-8 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-b-2 border-black p-4"
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
            CONOCÉ MÁS SOBRE GELATELLA
           
          </Link>
           
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image
              src="/assets/conocenos.png"
              width={390}
              height={608}
              alt="arte helado"
            />
        </div>                
    </div>
   
  )
}

export default Conocenos