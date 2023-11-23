import React from 'react'
import {Image} from "@nextui-org/react";

const About = () => {
  return (
    <div>
        <div class="  pt-16 pb-2 px-6 text-left dark:bg-neutral-900">
            <h1 class="ml-64 text-[#B0BF85] mt-2 mb-4 leading-trim both text-cap text-96  font-light	 text-base/loose leading-7 tracking-wider	  md:text-6xl xl:text-7xl">
            Somos  <span className='font-bold italic text-[#FF75AB]'>
            Gelatella
            </span>, <br />productores de 
            <span class='italic font-thin' > helados <br />nacionales</span>
            </h1>
         </div>
         <div class="flex justify-center ">
            <Image
             isZoomed
              src="/assets/about-page2.png"
              width={610}
              height={487}
              alt="arte helado"
              class="ml-20 mt-40"
            />
            <Image
             isZoomed
              src="/assets/about-page1.png"
              width={618}
              height={487}
              alt="arte helado"
              class="mb-10"
            />
           
           
         </div>
         <div class=" mt-16  mr-64 py-2 px-6 text-left dark:bg-neutral-900">
            <h1 class="ml-64 text-[#B0BF85]  mb-6 text-96  font-thin italic text-base/loose leading-10 tracking-wider  md:text-6xl xl:text-7xl">
            La calidad se refleja  <br /> en cada cada   <br />cucharada  
            </h1>
            <p className='max-w-2xl ml-64 mb-6 text-black leading-both text-cap text-32 font-normal'>
            En nuestro espacio, te invitamos a sumergirte en un mundo de sabores exquisitos. Ya sea que estés buscando una indulgencia solitaria, un lugar para celebrar o simplemente disfrutar de un capricho diario, Gelatella es el destino perfecto para satisfacer tus antojos de helado.
            </p>
           
        </div>


    </div>
    
  )
}

export default About