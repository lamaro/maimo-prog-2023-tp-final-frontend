import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ defaultValue = [], children }) => {
  const [products, setProducts] = useState(null);
  const [producto, setProducto] = useState({});
  const [lodingProducts, setLoadingProducts] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      setLoadingProducts(true)
      const products = await axios.get("/data/products.json");
      setProducts(products.data);
      setLoadingProducts(false)
    } catch (error) {
      console.log(error);
    }
  }, []);

  //funcion nueva: es asincrona y es para llamar al json 
  const getProduct = useCallback(async (id) => {
    console.log(id)
    try {
      setLoadingProducts(true)
      //filtrar products y devolver un producto por id
      let products2 = await axios.get("/data/products.json");
        let productFinal = await buscarPorSKU(products2.data, id);
        console.log(productFinal)
        setProducto(productFinal)
        console.log(producto)
      
      
      setLoadingProducts(false)
    
    } catch (error) {
      console.log(error);
    }
  }, []);

  //buscamos por sku para traer elementos del json
  async function  buscarPorSKU(data, skuBuscado) {
    // Iterar sobre cada propiedad del objeto
    //in es una propiedad de queda objeto
    //no usamos map porque no recorre objetos
    for (let categoria in data) {
      //data es todo el json
      //categoria = franui/helados/palitos
      let opciones = data[categoria].options;

      // Buscar en las opciones de cada categoría
      //of es para un array (recorremos cada elemento del array)
      //aca podríamos usar un map porque sí recorre arrays
      for (let opcion of opciones) {
        if (opcion.sku === skuBuscado) {
          return opcion; // Retorna la opción encontrada
        }
      }
    }

    // Retorna null si no se encuentra el SKU
    return null;
  }

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <CartContext.Provider
      value={{
        products,
        lodingProducts,
        getProduct,
        producto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

export { CartProvider, CartContext };
