import React from "react";
import "./Header.scss"
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
                    <button className={"productList"}/>
                </Link>
            </div>
            <div>
                <Link to="/basket">
                    <button className={"basket"}/>
                </Link>
                <span className={"icon-number"}/>
            </div>
        </div>
    )
}

export default Header