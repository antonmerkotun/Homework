import React from "react";

class Button extends React.Component {

    render() {
        return (
            <button
                id={this.props.id}
                className={this.props.className}
                style={this.props.backgroundColor}
                onClick={this.props.onClick}
            >
                {this.props.text}
            </button>
        )
    }
}

export default Button;