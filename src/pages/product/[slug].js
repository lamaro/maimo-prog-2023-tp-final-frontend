import SingleProductContainer from '@/containers/SingleProductContainer';
import { useRouter } from 'next/router';

const Product = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <SingleProductContainer id={slug} />;
};

export default Product;