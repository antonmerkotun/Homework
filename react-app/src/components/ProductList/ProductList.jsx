import React, {useEffect, useState} from "react";
import modalData from "../Modal/ModalData";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./ProductList.scss"
import IconDelete from "../IconDelete/IconDelete";
import {connect, useSelector} from "react-redux";
import {closeModals, openModals} from "../../redux/actions/modalAction";
import {basketProduct} from "../../redux/actions/basketAction";

let basketArr = []
let favoriteArr = []

const ProductList = ({arrayProduct, pages, openModals, closeModals, syncModal}) => {
    const error = useSelector(state => state.ajax.error)
    const [modalObject, setModalObject] = useState({})
    const [basket, setBasket] = useState({})
    const [basketArray, setBasketArray] = useState([])
    const [numberButton, setNumberButton] = useState(null)

    useEffect(() => {
        setBasketArray(arrayProduct)
        if (arrayProduct === null) {
            setBasketArray([])
        }
        if (localStorage.getItem("basketArr")) {
            basketArr = JSON.parse(localStorage.getItem("basketArr"))
        }
        if (localStorage.getItem("favoriteArray")) {
            favoriteArr = JSON.parse(localStorage.getItem("favoriteArray"))
        }
    }, [arrayProduct])

    const openModal = (e) => {
        const modalID = e.target.dataset.modalId;
        setNumberButton(+e.target.id)
        const modalDeclaration = modalData.find(item => item.id === +modalID);
        setModalObject({...modalDeclaration})
        openModals()
        basketArray.forEach(ele => {
            if (ele.id === +e.target.id) {
                setBasket(ele)
            }
        })
    }

    const closeModal = (e) => {
        const target = e.target.className
        if (target === "modal_body-buttons-save") {
            if (pages === "Home") {
                basketArr.push(basket)
                localStorage.setItem("basketArr", JSON.stringify(basketArr))
            }
            if (pages === "Basket") {
                basketArr.forEach(el => {
                    if (el.id === numberButton) {
                        const newArrayProduct = basketArr.filter(newArr => newArr !== el)
                        basketArr = newArrayProduct
                        setBasketArray(newArrayProduct)
                        localStorage.setItem("basketArr", JSON.stringify(newArrayProduct))
                    }
                })
            }
        }
        closeModals()
    }

    const deleteProduct = (e) => {
        openModal(e)
        basketArray.forEach(ele => {
            if (ele.id === +e.target.id) {
                setBasket(ele)
            }
        })
    }

    const favoriteFunc = (event) => {
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
            localStorage.setItem("favorite", JSON.stringify(favorites))
        }
        basketArray.forEach(card => {
            if (card.id === +id) {
                if (el.className === 'icon-favorite-add') {
                    favoriteArr.push(card)
                }
                if (el.className === 'icon-favorite') {
                    favoriteArr.forEach(function (a, b) {
                        if (a.id === card.id) favoriteArr.splice(b, 1)
                    })
                }
                localStorage.setItem("favoriteArray", JSON.stringify(favoriteArr))
            }
        })
    }

    return (
        <>
            <div className="product-list__title">
                <h1>{pages}</h1>
            </div>
            {basketArray.length ?
                <div className="product-list">
                    {basketArray.map(card => {
                            return <ProductCard
                                favoriteFunc={favoriteFunc}
                                iconDelete={pages === "Basket" &&
                                    <IconDelete id={card.id} onClick={deleteProduct} dataModalId={"2"}/>}
                                key={card.id}
                                card={card}
                                button={pages === "Home" &&
                                    <Button
                                        id={card.id}
                                        dataModalId={"1"}
                                        className="button-modal"
                                        backgroundColor={{background: "#FFF"}}
                                        onClick={openModal}
                                        text={"Add to card"}
                                    />
                                }
                            />
                        }
                    )}
                    {syncModal === "OPEN_MODAL" &&
                        <Modal
                            onClick={closeModal}
                            header={modalObject.header}
                            closeButton={modalObject.closeButton}
                            text={modalObject.text}
                            action={modalObject.action}
                        />
                    }
                </div> : <p className="no-card">{typeof error === "string" ? "Server is not available" : "no card"}</p>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        syncModal: state.modal.stateModal
    }
}

const mapDispatchToProps = {
    openModals,
    closeModals,
    basketProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
