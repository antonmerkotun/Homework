import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <button
            id={props.id}
            data-modal-id={props.dataModalId}
            className={props.className}
            style={props.backgroundColor}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

Button.protoType = {
    id: PropTypes.number,
    dataModalId: PropTypes.string,
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
}

export default Button;