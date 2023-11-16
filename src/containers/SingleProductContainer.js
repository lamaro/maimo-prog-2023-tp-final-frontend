import { useEffect } from 'react';
import { useCartContext } from '@/contexts/Cartcontext';
import { ShowSingleProduct } from '@/componentes/ShowSingleProduct';
import { Spinner } from '@nextui-org/react';

const SingleProductContainer = ({ id }) => {
  const { producto, getProduct, loadingProducts, products } = useCartContext()
  console.log("id: ",id)
  useEffect(() => {
    if (id) {
      getProduct(id)
    }
  }, [id, getProduct]);

  //boton agregar al carrito allInfo para que traiga los gusto, producto para que tariga los productos
  //allInfo = gustos
  //Traigo los gustos porque no tienen sku
  return (
    <>                                                           
      {!loadingProducts ? <ShowSingleProduct producto={producto} allInfo={products} /> : <Spinner size="lg" /> }
     
      
    </>
  );
};

export default SingleProductContainer;