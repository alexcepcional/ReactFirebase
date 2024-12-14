import React from 'react'
import { useProductCategory } from '../hooks/useProductCategory'
import { ItemListContainer, Loader } from '../components'
import { useParams } from 'react-router'

export const Category = () => {
    const { id } = useParams()
    const { loading, products } = useProductCategory(id)

  return loading ? <Loader /> : <ItemListContainer products={products}/>
}
