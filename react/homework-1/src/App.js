import React from "react";
import Button from "./components/Button/Button.jsx";
import Modal from "./components/Modal/Modal.jsx";
import "./components/Button/Button.scss"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalToShow: "none"
        }
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
                        backgroundColor={{background: "red"}}
                        text='Open first modal'
                        onClick={this.firstModal.bind(this)}
                    />
                    <Button
                        backgroundColor={{background: "yellow"}}
                        text='Open second modal'
                        onClick={this.secondModal.bind(this)}
                    />
                </div>
                {this.state.modalToShow === "Open first modal" &&
                <Modal
                    header="Do you want to delete this file?"
                    closeButton={true}
                    text="Once you delete this file, it won't
                     be possible to undo this action. Are you
                      sure want to delete it?"
                    action=
                        {
                            <div className={"modal_body-buttons"}>
                                <button>Ok</button>
                                <button>Cancel</button>
                            </div>
                        }
                />
                }

                {this.state.modalToShow === "Open second modal" &&
                <Modal
                    header="Lorem ipsum dolor sit amet, consectetur"
                    closeButton={false}
                    text="Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. A adipisci, aperiam blanditiis
                     dolores maiores neque rem veritatis."
                    action=
                        {
                            <div className={"modal_body-buttons"}>
                                <button>Cancel</button>
                                <button>Ok</button>
                            </div>
                        }
                />
                }
            </>
        );
    }
}

export default App;