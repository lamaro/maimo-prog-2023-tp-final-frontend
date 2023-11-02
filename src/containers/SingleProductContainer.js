import { useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
//import ShowSingleCard from '@/components/ShowSingleCard';

const SingleProductContainer = ({ id }) => {
  const { product, getProduct, productLoading } = useAppContext();

  useEffect(() => {
    if (id) {
      getShow(id);
    }
  }, [id, getShow]);

  //boton agregar al carrito
  return (
    <>
      {showLoading && <p>LOADING....</p>}
      {!showLoading && <ShowSingleCard show={show} />}
      
    </>
  );
};

export default SingleProductContainer;