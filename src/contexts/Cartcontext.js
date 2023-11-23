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
  const [cart, setCart] = useState(defaultValue);



    const updateLocalStorage = () => {
      localStorage.setItem('cart', JSON.stringify(cart));}


      // ... (tu código existente)
    
      const addToCart = (product) => {
        // Verificar si el producto ya está en el carrito
        const existingProduct = cart.find((item) => item.id === product.id && item.gusto === product.gusto);
    
        if (existingProduct) {
            // Si ya existe con el mismo gusto, incrementar la cantidad
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === product.id && item.gusto === product.gusto
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // Si no existe, agregarlo al carrito con cantidad 1
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };
    const removeFromCart = (product, removeAll = false) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id && item.gusto === product.gusto
            ? {
                ...item,
                quantity: removeAll ? 0 : Math.max(0, item.quantity - 1),
              }
            : item
        )
      );
    };


  const getProducts = useCallback(async () => {
    try {
      setLoadingProducts(true);
      const productos = await axios.get("/data/products.json");
      setProducts(productos.data);
      setLoadingProducts(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  
  console.log("entre aca",producto)
  //funcion nueva: es asincrona y es para llamar al json

const getProduct = useCallback(async (id) => {
  console.log(id);
  setLoadingProducts(true);
  try {
    // Corrige la línea siguiente para usar la variable id en lugar de slug
    const product = await axios.get(`/data/products.json`);
    setProducto(product.data);
    
    setLoadingProducts(false);
  } catch (error) {
    console.log(error);
  }
}, []);


  useEffect(() => {
    getProducts();
  }, []);

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
  
  useEffect(() => {
    updateLocalStorage();
  }, [cart]);
  const deleteFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === product.id && item.gusto === product.gusto))
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        loadingProducts,
        getProduct,
        producto,
        recursos,
        filterRecursos,
        cart,
        addToCart,
        removeFromCart,
        deleteFromCart
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
