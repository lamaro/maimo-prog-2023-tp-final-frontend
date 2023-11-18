// pages/404.js

import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1>Error 404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link href="/">
        <a>Volver a la página de inicio</a>
      </Link>
    </div>
  );
};

export default NotFound;
