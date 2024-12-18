import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"


export const useProducts = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const collectionItems = collection(db, "products")
      getDocs(collectionItems)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({id: doc.id,
          ...doc.data(), 
          }))
        )
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))

  }, []);

  return { loading, products }
}