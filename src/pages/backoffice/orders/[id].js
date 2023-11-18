import BOSingleOrder from '@/componentes/BOSingleOrder';
import { useRouter } from 'next/router';

const Order = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <BOSingleOrder id={id} />
    </>
  )
};

export default Order;
