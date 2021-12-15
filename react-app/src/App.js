import React from "react";
import "./components/Button/Button.scss"
import "./App.scss"
import "./components/ProductCard/ProductCard.scss"
import ProductList from "./components/ProductList/ProductList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="favorite" element={<ProductList product={favoriteArr2} type={"favorite"}/>}/>
                <Route path="/" element={<ProductList product={[]} type={"json"}/>} />
                <Route path="basket" element={<ProductList product={basketIcon2} type={"basket"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

const favoriteArr2 = [{
    "id": 4,
    "productName": "Apple iPhone 4",
    "price": "400",
    "src": "https://i.citrus.ua/imgcache/size_180/uploads/shop/a/5/a5cdbe8091a783bd060df2c1f6ab8d0d.jpg",
    "article": "44444",
    "color": "red"
},{
    "id": 2,
    "productName": "Apple iPhone 4",
    "price": "400",
    "src": "https://i.citrus.ua/imgcache/size_180/uploads/shop/a/5/a5cdbe8091a783bd060df2c1f6ab8d0d.jpg",
    "article": "44444",
    "color": "red"
}]

const basketIcon2 = [{
    "id": 2,
    "productName": "Apple iPhone 4",
    "price": "400",
    "src": "https://i.citrus.ua/imgcache/size_180/uploads/shop/a/5/a5cdbe8091a783bd060df2c1f6ab8d0d.jpg",
    "article": "44444",
    "color": "red"
},{
    "id": 3,
    "productName": "Apple iPhone 4",
    "price": "400",
    "src": "https://i.citrus.ua/imgcache/size_180/uploads/shop/a/5/a5cdbe8091a783bd060df2c1f6ab8d0d.jpg",
    "article": "44444",
    "color": "red"
}]