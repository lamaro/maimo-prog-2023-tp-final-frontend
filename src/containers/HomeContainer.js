import { useCartContext } from "@/contexts/Cartcontext";
import CardsContainer from "@/containers/CardsContainer"

const HomeContainer = () => {
  const { products, lodingProducts } = useCartContext();
  const [recursos, setRecursos] = useState([]);
  const [heladoPote, setHeladoPote] = useState([]);
  const [heladoFranui, setHeladoFranui] = useState([]);
  //const productosFiltradosPalito = products.filter(producto=>producto.type === producto.type.includes("palito") )

  useEffect(() => {
    console.log(products)
    let productosMasVendidos = []
    if (products) {
      productosMasVendidos = [...products.franui.options, ...products.palito.options, ...products.pote.options]
      console.log(productosMasVendidos)
    }

    /* const palitoHelado = products.filter((el) => el.type.includes("palito"));
     console.log(palitoHelado, "palito");
     const poteHelado = products.filter((el) => el.type.includes("pote"));
     console.log(poteHelado, "pote");
     const franuiHelado = products.filter((el) => el.type.includes("franui"));
     console.log(franuiHelado, "franui");
 
     setHeladoPalito(palitoHelado);
     setHeladoPote(poteHelado);
     setHeladoFranui(franuiHelado);*/
    setRecursos(productosMasVendidos)
  }, [products]);

  return (
    <div>
      
        <section>

        </section>

        <section>
          
        </section>
        
        <section>
          <CardsContainer recursos={recursos}></CardsContainer>
        </section>
    </div>
  );
};

export default HomeContainer;
