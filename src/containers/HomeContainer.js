import { useCartContext } from "@/contexts/Cartcontext";

const HomeContainer = () => {
  const { products, lodingProducts } = useCartContext();

  return (
    <div>
      {!lodingProducts &&
        products.map(({ name }, index) => <p key={index}>{name}</p>)}
    </div>
  );
};

export default HomeContainer;
