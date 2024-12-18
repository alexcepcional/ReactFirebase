import { Loader, ItemListContainer } from "../components";

import { useProducts } from "../hooks/useProducts";

export const Home = () => {

  const { loading, products } = useProducts("products")

  return loading ? <Loader /> : <ItemListContainer products={products} />; 

};

