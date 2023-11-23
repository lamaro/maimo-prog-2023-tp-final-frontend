import React from 'react'
import { ReactSVG } from "react-svg";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Contacto = () => {
  return (
    <section className="min-h-screen bg-cover" style={{ backgroundImage: "url('/assets/Contact-page.jpeg')" }}>
    <div className="flex flex-col min-h-screen bg-black/60">
      <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="text-white lg:w-1/2 lg:mx-6">
          <div className="mr-4 fill-white">
            <ReactSVG
              src="/assets/gelatella-contact.svg"
              width={24}
              height={24}
              alt="Logo Gelatella Heladería"
              className="fill-white"
            />
          </div>
            <p className="max-w-xl mt-6">
              Descubrí la mejor Heladería del país y se vos también el que represente la marca más famosas de helados orginales. Si queres tener tu propia franquicia y fabricar nuevos gustos de helado, no dudes en escribirnos, queremos saber todo sobre vos! Estamos para ayudarte.
            </p>
            <div className="mt-6 md:mt-8">
              <h3 className="text-gray-300 italic"> Seguinos en nuestras redes</h3>

              <div className="flex mt-4 -mx-1.5 ">
              <div className="flex items-center space-x-4 ml-2">
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaTiktok size={24} />
          </div>
          </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#FDFAF0] shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
              <h1 className="text-5xl font-medium text-[#DC58A6] dark:text-gray-200 italic">contacto</h1>

             
              <form class="mt-6">
                            <div class="flex-1">
                                <label class="block mb-2 text-sm text-colorVerde dark:text-gray-200">NOMBRE</label>
                                <input type="text" placeholder="escribi tu nombre" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-transparent border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#DC58A6] focus:ring-[#DC58A6] focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-sm text-colorVerde dark:text-gray-200">EMAIL</label>
                                <input type="email" placeholder="escribi tu email" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-transparent border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#DC58A6] focus:ring-[#DC58A6] focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div class="w-full mt-6">
                                <label class="block mb-2 text-sm text-colorVerde dark:text-gray-200">MENSAJE</label>
                                <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#DC58A6] focus:ring-[#DC58A6] focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="dejanos tu mensaje"></textarea>
                            </div>

                            <button
          type="submit"
          class=" ml-4 mr-8 mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-b-2 border-black p-4  hover:bg-[#DC58A6] hover:text-[#FDFAF0] focus:ring-4 focus:ring-colorVerde"

        >
           <svg
              class="w-5 h-5 -ml-1 mr-3 hover:text-[#FDFAF0]"
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
          CONTACTARME CON GELATELLA
        </button>
                        </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contacto