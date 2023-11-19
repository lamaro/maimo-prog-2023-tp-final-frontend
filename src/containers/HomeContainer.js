import { useCartContext } from "@/contexts/Cartcontext";
import CardsContainer from "@/containers/CardsContainer";
import Hero from "@/componentes/Hero";
import Conocenos from "@/componentes/Conocenos";
import Form from "@/componentes/Form";

const HomeContainer = () => {
  const  { filterRecursos} = useCartContext();
  return (
    <div>

      <section>
      <Hero />
      </section>
      <Conocenos />
      <section>
      <h1 className=' mb-6  font-medium text-center  md:text-3xl xl:text-6xl text-black'>Los más pedidos</h1>
        <CardsContainer recursos={filterRecursos("todos")}></CardsContainer>
      </section>
      <section>
      <Form />
      </section>
    </div>
  );
};

export default HomeContainer;
