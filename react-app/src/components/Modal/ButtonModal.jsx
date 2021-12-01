import React from "react";
import "./Modal.scss"
class ButtonModal extends React.Component {
    render() {
        return (
            <div className={"modal_body-buttons"}>
                <button className={"modal_body-buttons-save"} onClick={this.onClick}>Ok</button>
                <button className={"modal_body-buttons-cancel"}>Cancel</button>
            </div>
        )
    }
}

export default ButtonModal