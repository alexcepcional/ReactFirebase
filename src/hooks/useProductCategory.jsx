import React, { useEffect, useState } from 'react'
import { getProductCategory } from '../services/productServices'

export const useProductCategory = (id) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductCategory(id)
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    }, [id])
  
    return { products, loading }
}
