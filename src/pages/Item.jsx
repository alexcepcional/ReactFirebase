import { useParams } from "react-router"
import { ItemDetailContainer, Loader } from "../components"
import { useProductId } from "../hooks/useProductId"
import { useContext } from "react"
import { CartContext } from "../context"

export const Item = () => {
  
  const { id } = useParams()
  
  const { product, loading } = useProductId(id)
  return loading ? <Loader /> : <ItemDetailContainer product={product}/>
}
