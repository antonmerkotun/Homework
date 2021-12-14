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
                <Route path="favorite" element={<ProductList product={JSON.parse(localStorage.getItem("favoriteArray"))}/>}/>
                <Route path="/" element={<ProductList product={[]}/>}/>
                <Route path="basket" element={<ProductList product={JSON.parse(localStorage.getItem("basketIcon"))}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
