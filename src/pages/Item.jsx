import { useParams } from "react-router"
import { ItemDetailContainer, Loader } from "../components"
import { useProductId } from "../hooks/useProductId"

export const Item = () => {
  
  const { id } = useParams()
  
  const { product, loading } = useProductId(id)
  
  return loading ? <Loader /> : <ItemDetailContainer product={product}/>
}
