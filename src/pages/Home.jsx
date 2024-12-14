import { getAllProducts } from "../services/productServices";

import { Loader, ItemListContainer } from "../components";

import { useProducts } from "../hooks/useProducts";

export const Home = () => {

  const { loading, products } = useProducts()

  return loading ? <Loader /> : <ItemListContainer products={products} />; 

};

