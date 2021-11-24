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

    firstModal() {
        this.setState({
            modalToShow: "Open first modal"
        })
    }

    secondModal() {
        this.setState({
            modalToShow: "Open second modal"
        })

    }

    render() {
        return (
            <>
                <div className={"buttons"}>
                    <Button
                        id={1}
                        backgroundColor={{background: "red"}}
                        text='Open first modal'
                        onClick={this.firstModal.bind(this)}
                    />
                    <Button
                        id={2}
                        backgroundColor={{background: "yellow"}}
                        text='Open second modal'
                        onClick={this.secondModal.bind(this)}
                    />
                </div>
                {this.state.modalToShow === "Open first modal" &&
                <Modal
                    header={this.modalData[0].header}
                    closeButton={this.modalData[0].closeButton}
                    text={this.modalData[0].text}
                    action={this.modalData[0].action}
                />
                }
                {this.state.modalToShow === "Open second modal" &&
                <Modal
                    header={this.modalData[1].header}
                    closeButton={this.modalData[1].closeButton}
                    text={this.modalData[1].text}
                    action={this.modalData[1].action}
                />
                }
            </>
        );
    }
}

export default App;