import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
    render() {
        return (
            <button
                id={this.props.id}
                data-modal-id={this.props.dataModalId}
                className={this.props.className}
                style={this.props.backgroundColor}
                onClick={this.props.onClick}
            >
                {this.props.text}
            </button>
        )
    }
}

Button.protoType = {
    id: PropTypes.number,
    dataModalId: PropTypes.string,
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
}

export default Button;