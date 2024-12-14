import { useEffect, useState } from "react"
import { getProductId } from "../services/productServices"

export const useProductId = (id) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getProductId(id)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))

    }, [])

    return { product, loading }
}
