import axios from "axios";

export async function getAllProducts(limit = 24) {
 return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export async function getAllCategories() {
 return await axios.get(`https://dummyjson.com/products/categories`)
}

export async function getProductId(id) {
 return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getProductCategory(id) {
 return await axios.get(`https://dummyjson.com/products/category/${id}`)
}

export async function searchProduct(query) {
 return await axios.get(`https://dummyjson.com/products/search?q=${query}`)
}