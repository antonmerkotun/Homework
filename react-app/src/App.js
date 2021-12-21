import React from "react";
import "./components/Button/Button.scss"
import "./App.scss"
import "./components/ProductCard/ProductCard.scss"
import ProductList from "./components/ProductList/ProductList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Header from "./components/Header/Header";
import ArrayBasket from "./Context";


const favorite = JSON.parse(localStorage.getItem("favoriteArray"))

const basket = JSON.parse(localStorage.getItem("basketIcon"))


const App = () => {
    return (
        <BrowserRouter>
            <ArrayBasket.Provider value={[]}>
                <Routes>
                    <Route exact path="favorite" element={<ProductList product={favorite} type={"favorite"}/>}/>
                    <Route exact path="/" element={<ProductList product={[]} type={"product_list"}/>}/>
                    <Route exact path="basket" element={<ProductList product={basket} type={"basket"}/>}/>
                </Routes>
            </ArrayBasket.Provider>
        </BrowserRouter>
    )
}

export default App;
