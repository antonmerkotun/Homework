import React from "react";
import Button from "./components/Button/Button.jsx";
import Modal from "./components/Modal/Modal.jsx";
import "./components/Button/Button.scss"
import modalData from "./components/Modal/ModalData";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalToShow: "none"
        }
        this.modalData = modalData
    }

    firstModal = (e) => {
        const modalID = e.target.dataset.modalId;
        const modalDeclaration = this.modalData.find(item => item.id === +modalID);
        this.header = modalDeclaration.header;
        this.closeButton = modalDeclaration.closeButton;
        this.text = modalDeclaration.text;
        this.action = modalDeclaration.action;
        this.setState({
            modalToShow: "Open modal"
        })
    }

    closeModal = (e) => {
        const target = e.target.className
        if (target === "modal" ||
            target === "modal_header-button" ||
            target === "modal_body-buttons-cancel") {
            this.setState({
                modalToShow: "none"
            })
        }
    }

    render() {
        return (
            <>
                <div className={"buttons"}>
                    <Button
                        dataModalId={1}
                        backgroundColor={{background: "#f8ec02"}}
                        text='Open first modal'
                        onClick={this.firstModal}
                    />
                    <Button
                        dataModalId={2}
                        backgroundColor={{background: "#54f802"}}
                        text='Open second modal'
                        onClick={this.firstModal}
                    />
                </div>
                {this.state.modalToShow === "Open modal" &&
                <Modal
                    onClick={this.closeModal}
                    header={this.header}
                    closeButton={this.closeButton}
                    text={this.text}
                    action={this.action}
                />
                }
            </>
        );
    }
}

export default App;