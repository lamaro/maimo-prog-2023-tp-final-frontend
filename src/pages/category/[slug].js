import { useRouter } from "next/router";
import { useCartContext } from "@/contexts/Cartcontext";
import { useEffect, useCallback } from "react";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { products } = useCartContext();

  const getProductsFromCategory = useCallback(() => {
    const productsInCategory = products.find(({ type }) => type === slug);
    console.log(productsInCategory);
    return productsInCategory();
  }, [products, slug]);

  useEffect(() => {
    getProductsFromCategory();
  }, [getProductsFromCategory]);



  return <div>Category {slug}</div>;
};

export default Category;
