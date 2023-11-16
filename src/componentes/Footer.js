import React from "react";
import { ReactSVG } from "react-svg";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-12">
      {/* Parte superior del footer con fondo #FDFAF0 */}
      <div className="bg-[#FDFAF0] h-20"></div>

      {/* Parte inferior del footer con fondo #B0BF85 */}
      <div className="bg-[#B0BF85] text-white px-8 sm:px-24 pb-36 pt-16 relative z-10">
        
        {/* Columna con el logo de Gelatella y los íconos de redes sociales */}
        <div className="flex items-center mb-4 md:mb-0 md:mr-8">
          <div className="mr-4 fill-white">
            <ReactSVG
              src="/assets/gelatella-footer.svg"
              width={24}
              height={24}
              alt="Logo Gelatella Heladería"
              className="fill-white"
            />
          </div>
          <div className="flex items-center space-x-4 ml-12">
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaTiktok size={24} />
          </div>
        </div>

        <hr className="border-t border-white my-8 w-full" />

        <div className="container flex flex-col md:flex-row justify-start">
          {/* Primera Columna (Empresa) */}
          <div className="mb-4 md:mb-0 md:mr-8">
            <h2 className="text-xl font-bold mb-2">Empresa</h2>
            <ul>
              <li>Empleo</li>
              <li>Contacto</li>
              <li>Mapa de sitio</li>
            </ul>
          </div>

          {/* Segunda Columna (Información) */}
          <div className="ml-4 sm:ml-12">
            <h2 className="text-xl font-bold mb-2">Información</h2>
            <ul>
              <li>Política de privacidad</li>
              <li>Configuración de cookies</li>
              <li>Términos y condiciones</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Imagen del lado derecho que ocupa todo el alto */}
      <div className="hidden sm:block">
        <Image
          src="/assets/footer-cono.png"
          alt="Imagen Derecha"
          width={584}
          height={584}
          className="absolute top-0 right-0 h-full z-20"
        />
      </div>
    </footer>
  );
};

export default Footer;
