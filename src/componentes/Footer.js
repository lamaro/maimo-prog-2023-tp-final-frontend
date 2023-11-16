import React from 'react';
import { ReactSVG } from "react-svg";
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#B0BF85] mt-12 text-white p-8">
      <div className="justify-start">

        {/* Columna con el logo de Gelatella y los íconos de redes sociales */}
        <div className="flex items-center mb-4 md:mb-0 md:mr-8">
          <div className="mr-4">
            <ReactSVG
              src="/assets/gelatella.svg"
              width={24}
              height={24}
              alt="Logo Gelatella Heladería"
              className="text-white"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaTiktok size={24} />
          </div>
        </div>

        <hr className="border-t border-white my-8 w-full" />

        <div className="container mx-auto flex flex-col md:flex-row justify-start">
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
          <div>
            <h2 className="text-xl font-bold mb-2">Información</h2>
            <ul>
              <li>Política de privacidad</li>
              <li>Configuración de cookies</li>
              <li>Términos y condiciones</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
