import React from "react";
import "./components/Button/Button.scss"
import "./App.scss"
import "./components/ProductCard/ProductCard.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Basket from "./pages/Basket/Basket";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/favorite" element={<Favorite/>}/>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/basket" element={<Basket/>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
