import { useCartContext } from "@/contexts/Cartcontext";
import CardsContainer from "@/containers/CardsContainer"

const HomeContainer = () => {
  const { products, lodingProducts } = useCartContext();

  return (
    <div>
      
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
