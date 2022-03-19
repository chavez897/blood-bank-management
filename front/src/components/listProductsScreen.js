import { useEffect, useState } from "react";
import React from "react";
import { axiosInstance } from "../plugins/axios";

export const ListProductsScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axiosInstance
        .get(`/products/`)
        .then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }, []);
    return (
        <div>
            <h1>List Mod</h1>
            <ul>
                {
                    products.map((prod) => (
                        <li key={prod.name}>{prod.name}</li>
                    ))
                }
            </ul>
        </div>
    );
  };