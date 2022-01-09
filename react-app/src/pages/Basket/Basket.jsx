import React from "react";
import ProductList from "../../components/ProductList/ProductList";

const Basket = () => {
    const product = JSON.parse(localStorage.getItem("basketArr"))

    return (
        <ProductList arrayProduct={product} pages={"Basket"}/>
    )
}

export default Basket