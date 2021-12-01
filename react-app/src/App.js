import React from "react";
import "./components/Button/Button.scss"
import modalData from "./components/Modal/ModalData";
import Card from "./components/Card/Card.jsx";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.scss"
import "./components/Card/Card.scss"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalObject: {},
            modalToShow: "none",
            arrayProduct: [],
        }
    }

    openModal = (e) => {
        const modalID = e.target.dataset.modalId;
        const modalDeclaration = modalData.find(item => item.id === +modalID);
        this.setState({
            modalObject: {...modalDeclaration},
            modalToShow: "Open modal",
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
        if (target === "modal_body-buttons-save") {
            this.setState({
                modalToShow: "none",


                // SAVE


            })
        }
    }

    componentDidMount() {
        fetch("productList.json")
            .then(response => response.json())
            .then(result => {
                    this.setState({
                        arrayProduct: result
                    });
                // eslint-disable-next-line array-callback-return
                    result.map(card => {
                        // localStorage.setItem(card.id, card.icon)
                    })
                }
            )
    }

    componentWillUnmount() {
        fetch("productList.json").then(response => response.json())
    }

    setStar = (e) => {
        e.target.classList.toggle('icon-favorite-add')
        const className = e.target.className
        // eslint-disable-next-line array-callback-return
        this.state.arrayProduct.map(ele => {
            if (+e.target.id === ele.id) {
                console.log(ele)
                localStorage.setItem(ele.id, className)
            }
        })
    }

    render() {
        return (
            <div className="product-list">
                {this.state.arrayProduct.map(e => (
                        <Card
                            icon={localStorage.getItem(e.id)}
                            id={e.id}
                            key={e.id}
                            onClick={this.setStar}
                            article={e.article}
                            src={e.src}
                            productName={e.productName}
                            price={e.price}
                            color={e.color}
                            button={
                                <Button
                                    dataModalId="1"
                                    className="button-modal"
                                    backgroundColor={{background: "#FFF"}}
                                    onClick={this.openModal}
                                    text="Add to card"
                                />
                            }
                        />
                    )
                )}
                {this.state.modalToShow === "Open modal" &&
                    <Modal
                        onClick={this.closeModal}
                        header={this.state.modalObject.header}
                        closeButton={this.state.modalObject.closeButton}
                        text={this.state.modalObject.text}
                        action={this.state.modalObject.action}
                    />
                }
            </div>
        )
    }
}



export default App;