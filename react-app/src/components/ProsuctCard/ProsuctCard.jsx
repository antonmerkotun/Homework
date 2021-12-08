import React, {useEffect, useState} from "react";
import "./ProsuctCard.scss"
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import modalData from "../Modal/ModalData";
import Modal from "../Modal/Modal.jsx";
import "../Button/Button.scss"

let basketIcon = []


const ProsuctCard2 = () => {
    const [productList, setProductList] = useState([])
    const [modalObject, setModalObject] = useState({})
    const [modalToShow, setModalToShow] = useState('none')
    const [basket, setBasket] = useState('')
    const [favorite, setfavorite] = useState('')

}

class ProsuctCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            modalObject: {},
            modalToShow: "none",
            basket: '',
            favorite: ''
        }
    }

    componentDidMount() {
        fetch("productList.json")
            .then(response => response.json())
            .then(result => {
                    this.setState({
                        productList: result
                    });
                }
            )
        if (basketIcon.length === 0) {
            basketIcon = JSON.parse(localStorage.getItem("basketIcon"))
        }
        if (basketIcon === null) {
            basketIcon = []
        }
    }

    openModal = (e) => {
        const modalID = e.target.dataset.modalId;
        const modalDeclaration = modalData.find(item => item.id === +modalID);
        this.setState({
            modalObject: {...modalDeclaration},
            modalToShow: "Open modal",
        })
        this.state.productList.forEach(ele => {
            if (ele.id === +e.target.id) {
                this.setState({
                    basket: ele
                })
            }
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
            basketIcon.push(this.state.basket)
            this.setState({
                modalToShow: "none"
            })
            localStorage.setItem("basketIcon", JSON.stringify(basketIcon))
        }
    }

    setFavorite = (event) => {
        const el = event.target;
        const id = el.id
        if (id) {
            let favorites = JSON.parse(localStorage.getItem("favorite")) || []
            if (favorites.includes(id)) {
                el.classList = 'icon-favorite'
                favorites = favorites.filter(fId => fId !== id)
            } else {
                el.classList = 'icon-favorite-add'
                favorites.push(id)
            }
            localStorage.setItem(el.id, el.className)
            localStorage.setItem("favorite", JSON.stringify(favorites))
            this.setState({
                favorite: favorites
            })
            // console.log(JSON.parse(localStorage.getItem('favorite')))
            // JSON.parse(localStorage.getItem('favorite')).forEach(e => {
            //     console.log(e)
            // })
        }
    }

    render() {
        return (
            <>
                <div className={"header"}>
                    <div>
                        <button className={"favorite"}/>
                        <span className={"icon-number"}>{JSON.parse(localStorage.getItem('favorite')).length}</span>
                    </div>
                    <div>
                        <button className={"basket"}/>
                        <span className={"icon-number"}>{basketIcon.length}</span>
                    </div>
                </div>
                <div className="product-list">
                    {this.state.productList.map(card => (
                        <div className={"card"} key={card.id}>
                            <div className={"card_icon-article"}>
                                <button id={card.id} className={`icon-favorite ${localStorage.getItem(card.id)}`}
                                        onClick={this.setFavorite}/>
                                <span className={"card-article"}>article: {card.article}</span>
                            </div>
                            <img className={"card-image"} src={card.src} alt={"img"}/>
                            <div className={"card_body"}>
                                <h4 className={"card_body-name"}>{card.productName}</h4>
                                <p className={"card_body-price"}>Price: {card.price} $</p>
                                <p className={"card_body-color"}>Color: {card.color}</p>
                            </div>
                            {<Button
                                id={card.id}
                                dataModalId="1"
                                className="button-modal"
                                backgroundColor={{background: "#FFF"}}
                                onClick={this.openModal}
                                text="Add to card"
                            />}
                        </div>
                    ))}
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
            </>
        )
    }
}

ProsuctCard.protoType = {
    id: PropTypes.number,
    icon: PropTypes.string,
    article: PropTypes.string,
    src: PropTypes.string,
    productName: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
}

export default ProsuctCard;