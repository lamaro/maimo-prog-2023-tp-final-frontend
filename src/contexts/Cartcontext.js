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
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [recursos, setRecursos] = useState([]);

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

  const filterRecursos = useCallback((value) => {
    let productosFiltrados = [];
    if (products) {
      switch (value) {
        case "franui":
          productosFiltrados = products.franui.options;
          break;
        case "palitos":
          productosFiltrados = products.palito.options;
          break;
        case "pote":
          productosFiltrados = products.pote.options;
          break;
          case "todos":
            productosFiltrados = [
              ...products.franui.options,
              ...products.palito.options,
              ...products.pote.options,
            ];
          break;
        default:
          productosFiltrados = [
            ...products.franui.options,
            ...products.palito.options,
            ...products.pote.options,
          ];
      }
    }
    setRecursos(productosFiltrados);
  }, [products]);

  useEffect(() => {
    filterRecursos("franui"); // Puedes cambiar el valor inicial aquí
  }, [filterRecursos]);

  return (
    <CartContext.Provider
      value={{
        products,
        loadingProducts,
        getProduct,
        producto,
        recursos,
        filterRecursos,
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
