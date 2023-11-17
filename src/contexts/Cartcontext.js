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
      setLoadingProducts(true);
      const products = await axios.get("/data/products.json");
      setProducts(products.data);
      setLoadingProducts(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //funcion nueva: es asincrona y es para llamar al json

  const getProduct = useCallback(async (id) => {
    console.log(id);
    setLoadingProducts(true);
    try {
      //filtrar products y devolver un producto por id
      const product = await axios.get("/data/products.json/product/${slug}");
      setProducto(product.data);

      setLoadingProducts(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
