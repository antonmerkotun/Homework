import React, {useEffect, useState} from "react";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("productList.json")
            .then(response => response.json())
            .then(result => {
                setProduct(result)
            })
    }, [])

    return (
        <ProductList arrayProduct={product} pages={"Home"}/>
    )
}

export default Home