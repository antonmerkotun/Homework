import React from "react";
import './Modal.scss';
import PropTypes from "prop-types";

const Modal = (props) => {

    return (
        <div onClick={props.onClick}>
            <div className={"modal"}>
                <div className={"modal-dialog"}>
                    <div className={"modal_header"}>
                        <h3 className={"modal_header-title"}>{props.header}</h3>
                        {props.closeButton === true &&
                            <button className={"modal_header-button"}>X</button>}
                    </div>
                    <div className={"modal_body"}>
                        <p className={"modal_body-text"}>
                            {props.text}
                        </p>
                        {props.action}
                    </div>
                </div>
            </div>
        </div>
    )
}

Modal.propType = {
    header: PropTypes.string,
    text: PropTypes.string,
}

export default Modal;