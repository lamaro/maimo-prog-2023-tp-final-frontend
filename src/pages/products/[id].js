import SingleCardContainer from '@/containers/SingleCardContainer';
import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return <SingleCardContainer id={id} />;
};

export default Product;