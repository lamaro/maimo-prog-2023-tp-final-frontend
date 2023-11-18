import Footer from '@/componentes/Footer';
import NavbarComponent from '@/componentes/Navbar';

const LayoutContainer = ({ children, title }) => {
  return (
    <>
      <NavbarComponent />
      <h1>{title}</h1>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutContainer;

const unaCate = {
  name: 'Raw',
  slug: 'raw-ice-creams',
  products: [343242334234, 4324242342, 4234242],
};
