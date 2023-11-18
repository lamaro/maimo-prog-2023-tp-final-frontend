import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className={`hero flex justify-center items-center w-full h-[600px] bg-[url('/assets/hero-bg.png')] bg-cover bg-top mb-6`}
    >
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <div class="mb-8">
            <Image
              src="/assets/Arte-Helado.png"
              width={752}
              height={500}
              alt="arte helado"
            />
          </div>

          <h2 class="max-w-2xl mb-6 text-black leading-both text-cap text-24 font-normal">
            Descubrí en cada cucharada, un pedacito de la Argentina. Desde
            Tilcara hasta el Faro del Fin del Mundo, podes elegir entre nuestros
            23 helados a que provincias queres viajar.
          </h2>
          <Link
            href="/helados"
            class=" mr-8 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-black rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            
            Armar pote
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>

          <Link
            href="/helados"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-black rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
           Ver helados
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
