import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useProductId = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const item = doc(db, "products", id);

        getDoc(item)
            .then((snapshot) => setProduct({ id: snapshot.id, ...snapshot.data() }))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return { product, loading };
};
