import React from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import modalData from "../Modal/ModalData";
import "./Card.scss"

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalToShow: "none",
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
    }
    render() {
        return (
            <div className={"card"}>
                <div className={"card_icon-article"}>
                    {/*<svg className={"star-icon"} viewBox="0 0 24 24"><path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>*/}
                    <svg className={"star-icon"} viewBox="0 0 24 24">
                        <path fill="rgb(221, 221, 221)"
                              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                    <span className={"card-article"}>article: {this.props.article}</span>
                </div>
                <img className={"card-image"} src={this.props.src} alt={"img"}/>
                <div className={"card_body"}>
                    <h4 className={"card_body-name"}>{this.props.productName}</h4>
                    <p className={"card_body-price"}>Price: {this.props.price} $</p>
                    <p className={"card_body-color"}>Color: {this.props.color}</p>
                </div>
                <Button
                    dataModalId="1"
                    className="button-modal"
                    backgroundColor={{background: "#FFF"}}
                    onClick={this.openModal}
                    text="Add to card"
                />
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

export default Card