import { useState, useEffect } from "react";
import { getAllCategories } from "../services/productServices";

export const useCategories = () =>{
    const [categories, setCategories] = useState([]);

    useEffect (() => {

        getAllCategories()
        .then((res) => {
        setCategories (res.data);
        })
        .catch((err) => {
        console.log(err);
        })
        }, []);

    return { categories };
};