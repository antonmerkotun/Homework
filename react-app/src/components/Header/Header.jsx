import React from "react";
import "./Header.scss"
import {basketIcon} from "../ProductList/ProductList";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={"header"}>
            <div>
                <Link to="/favorite">
                    <button className={"favorite"}/>
                </Link>
            </div>
            <div>
                <Link to="/">
                    <button className={"ProductList"}>Product list</button>
                </Link>
            </div>
            <div>
                <Link to="/basket">
                    <button className={"basket"}/>
                </Link>
                <span className={"icon-number"}>{basketIcon.length}</span>
            </div>
        </div>
    )
}

export default Header