import React from "react";
import './Modal.scss';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        }
    }

    // modalClose() {
    //     this.setState({
    //         modal: false
    //     })
    // }


    render() {
        return (
            <div>
                <div className={"modal"}>
                    <div className={"modal-dialog"}>
                        <div className={"modal_header"}>
                            <h3 className={"modal_header-title"}>{this.props.header}</h3>
                            {this.props.closeButton === true &&
                            <button className={"modal_header-button"}>X</button>}

                        </div>
                        <div className={"modal_body"}>
                            <p className={"modal_body-text"}>
                                {this.props.text}
                            </p>
                            {this.props.action}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;