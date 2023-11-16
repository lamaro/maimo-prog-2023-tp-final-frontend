import { useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import BOSingleOrder from '@/componentes/BOSingleOrder';

const SingleCardContainer = ({ id }) => {
  const { show, getShow, showLoading } = useAppContext();

  useEffect(() => {
    if (id) {
      getShow(id);
    }
  }, [id, getShow]);

  return (
    <>
      {showLoading && <p>LOADING....</p>}
      {!showLoading && <BOSingleOrder show={show} />}
    </>
  );
};

export default SingleCardContainer;
