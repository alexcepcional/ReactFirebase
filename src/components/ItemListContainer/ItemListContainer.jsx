import { Flex } from "@chakra-ui/react";
import { ItemCard } from "../ItemCard/ItemCard";

export const ItemListContainer = ({ products }) => {
  return (
    <Flex
      wrap="wrap"
      justify="center"
      align="center"
      minH="100vh"
      marginTop={"10px"}
      marginBottom={"10px"}
    >
      {products.map((product) => (
        <ItemCard key={product.id} data={product} />
      ))}
    </Flex>
  );
};
