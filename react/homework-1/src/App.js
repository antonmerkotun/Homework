import React from "react";
// import Button from "./components/Button/Button.jsx";
// import Modal from "./components/Modal/Modal.jsx";
import "./components/Button/Button.scss"
// import modalData from "./components/Modal/ModalData";
import Card from "./components/Card/Card.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayProduct: [],
        }
    }

    // openModal = (e) => {
    //     const modalID = e.target.dataset.modalId;
    //     const modalDeclaration = modalData.find(item => item.id === +modalID);
    //     this.setState({
    //         modalObject: {...modalDeclaration},
    //         modalToShow: "Open modal",
    //     })
    // }
    //
    // closeModal = (e) => {
    //     const target = e.target.className
    //     if (target === "modal" ||
    //         target === "modal_header-button" ||
    //         target === "modal_body-buttons-cancel") {
    //         this.setState({
    //             modalToShow: "none"
    //         })
    //     }
    // }

    componentDidMount() {
        fetch("productList.json")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        arrayProduct: result
                    });
                }
            )
    }

    render() {
        return (
            <div className={"product-card"}>
                {this.state.arrayProduct.map(e => (
                        <Card
                            key={e.id}
                            article={e.article}
                            src={e.src}
                            productName={e.productName}
                            price={e.price}
                            color={e.color}
                        />
                    )
                )}
            </div>

            // <>
            //     <div className={"buttons"}>
            //         <Button
            //             dataModalId={1}
            //             backgroundColor={{background: "#f8ec02"}}
            //             text='Open first modal'
            //             onClick={this.openModal}
            //         />
            //         <Button
            //             dataModalId={2}
            //             backgroundColor={{background: "#54f802"}}
            //             text='Open second modal'
            //             onClick={this.openModal}
            //         />
            //     </div>
            //     {this.state.modalToShow === "Open modal" &&
            //         <Modal
            //             onClick={this.closeModal}
            //             header={this.state.modalObject.header}
            //             closeButton={this.state.modalObject.closeButton}
            //             text={this.state.modalObject.text}
            //             action={this.state.modalObject.action}
            //         />
            //     }
            // </>
        )
    }
}

export default App;