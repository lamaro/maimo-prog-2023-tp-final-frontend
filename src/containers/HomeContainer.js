import { useCartContext } from "@/contexts/Cartcontext";
import CardsContainer from "@/containers/CardsContainer";
import Hero from "@/componentes/Hero";
import Conocenos from "@/componentes/Conocenos";
import Form from "@/componentes/Form";

const HomeContainer = () => {
 
  return (
    <div>

      <section>
      <Hero />
      </section>
      <Conocenos />
      <section>
    
      </section>
      <section>
      <Form />
      </section>
    </div>
  );
};

export default HomeContainer;
