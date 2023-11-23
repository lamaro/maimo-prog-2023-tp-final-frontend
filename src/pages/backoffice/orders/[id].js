import { useRouter } from 'next/router';

const Order = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
    </>
  )
};

export default Order;
