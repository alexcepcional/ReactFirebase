import { FiShoppingCart } from "react-icons/fi";
import {Flex} from "@chakra-ui/react"
import { useContext } from "react"
import { CartContext } from "../../context"

export const CartWidget = () => {
  
  const {cartState} = useContext(CartContext)
  const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0)

  return (
    
    <Flex
    alignItems={"center"}
    marginRight={"30px"}
    justifyContent={"space-between"}
    width={"30px"}>
        <FiShoppingCart />
        {totalItems}
    </Flex>

  )
}
