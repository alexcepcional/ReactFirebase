import { useState, useEffect } from "react";
import { getAllProducts } from "../services/productServices";

export const useProducts = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data.products); 
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });
  }, []);

  return { loading, products }
}