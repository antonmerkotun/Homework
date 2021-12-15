import React from "react";
import "./components/Button/Button.scss"
import "./App.scss"
import "./components/ProductCard/ProductCard.scss"
import ProductList from "./components/ProductList/ProductList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";


const favorite = JSON.parse(localStorage.getItem("favoriteArray"))

const basket = JSON.parse(localStorage.getItem("basketIcon"))


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="favorite" element={<ProductList product={favorite} type={"favorite"}/>}/>
                <Route path="/" element={<ProductList product={[]} type={"product list"}/>} />
                <Route path="basket" element={<ProductList product={basket} type={"basket"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
