import React from "react";
import "./Modal.scss"

const ButtonModal = () => {
    return (
        <div className={"modal_body-buttons"}>
            <button className={"modal_body-buttons-save"}>Ok</button>
            <button className={"modal_body-buttons-cancel"}>Cancel</button>
        </div>
    )
}


export default ButtonModal
