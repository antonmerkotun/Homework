import React from "react";
import "./Header.scss"
import {basketIcon} from "../../App";

const Header = () => {
    return (
        <div className={"header"}>
            <div>
                <button className={"favorite"}/>
            </div>
            <div>
                <button className={"basket"}/>
                <span className={"icon-number"}>{basketIcon.length}</span>
            </div>
        </div>
    )
}

export default Header