import React from "react";
import "./Header.scss"
import {Link} from "react-router-dom";
// import ArrayBasket from "../../Context";

const Header = () => {
    // const arrayBasket = useContext(ArrayBasket)
    return (
        <div className={"header"}>
            <div>
                <Link to="/favorite">
                    <button className={"favorite"}/>
                </Link>
            </div>
            <div>
                <Link to="/">
                    <button className={"productList"}/>
                </Link>
            </div>
            <div>
                <Link to="/basket">
                    <button className={"basket"}/>
                </Link>
            </div>
        </div>
    )
}

export default Header