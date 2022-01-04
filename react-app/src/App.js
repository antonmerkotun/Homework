import React from "react";
import "./components/Button/Button.scss"
import "./App.scss"
import "./components/ProductCard/ProductCard.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Basket from "./pages/Basket/Basket";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";


// const favorite = JSON.parse(localStorage.getItem("favoriteArray"))

// const basket = JSON.parse(localStorage.getItem("basketIcon"))


const App = () => {
    return (
        <BrowserRouter>
            {/*<ArrayBasket.Provider value={[]}>*/}
            <Header/>
            <Routes>
                <Route exact path="favorite" element={<Favorite/>}/>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="basket" element={<Basket/>}/>}/>
            </Routes>
            {/*</ArrayBasket.Provider>*/}
        </BrowserRouter>
    )
}

export default App;
