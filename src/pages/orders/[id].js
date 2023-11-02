//import SingleCardContainer from '@/containers/SingleCardContainer'; importo donde uso orders creo que va en cart, pero no estoy segura
import { useRouter } from 'next/router';

const Order = () => {
  const router = useRouter();
  const { id } = router.query;

  //return <SingleCardContainer id={id} />; devuelvo orders
};

export default Order;