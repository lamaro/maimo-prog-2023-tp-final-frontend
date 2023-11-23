import {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
  } from 'react';
  import axios from 'axios';
  
  const BOContext = createContext();
  
  export const BOContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState([]);

  
    const getOrders = useCallback(async () => {
        setOrdersLoading(true);
      try {
        const showsReq = await axios.get(
          `https://maimo-prog-2023-tp-final-backend.vercel.app/orders`
        );
        setOrders(showsReq.data);
        setOrdersLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, []);
  
    
    const getProducts = useCallback(async () => {
        setProductsLoading(true);

        try {
          const showsReq = await axios.get(
            `https://maimo-prog-2023-tp-final-backend.vercel.app/products`
          );
          setProducts(showsReq.data);
          setProductsLoading(false);

        } catch (error) {
          console.log(error);
        }
      }, []);

      const deleteOrder = useCallback(async (postIdToDelete) => {
        axios.delete(`https://maimo-prog-2023-tp-final-backend.vercel.app/orders/${postIdToDelete}`)
        .then(response => {
            console.log(`Deleted post with ID ${postIdToDelete}`);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const deleteProduct = useCallback(async (postIdToDelete) => {
        axios.delete(`https://maimo-prog-2023-tp-final-backend.vercel.app/products  /${postIdToDelete}`)
        .then(response => {
            console.log(`Deleted post with ID ${postIdToDelete}`);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
     
    
  
    useEffect(() => {
        getOrders();
        getProducts();
    }, [getOrders, getProducts]);
      



  
    return (
      <BOContext.Provider
        value={{
          orders,
          products,
          ordersLoading,
          productsLoading,
          deleteOrder,
          deleteProduct
          
        }}
      >
        {children}
      </BOContext.Provider>
    );
  };
  
  export const useBOContext = () => {
    const context = useContext(BOContext);
    if (!context) {
      throw new Error('useAppContexts must be used within a AppContextProvider');
    }
    return context;
  };
  
  export default BOContext;
  