import { useCartContext } from "@/contexts/Cartcontext";
import CardsContainer from "@/containers/CardsContainer"

const HomeContainer = () => {
  const { products, lodingProducts } = useCartContext();

  return (
    <div>
      {!lodingProducts &&
        products.map(({ name }, index) => <p key={index}>{name}</p>)}
        <section>

        </section>

        <section>
          
        </section>
        
        <section>
          <CardsContainer></CardsContainer>
        </section>
    </div>
  );
};

export default HomeContainer;
