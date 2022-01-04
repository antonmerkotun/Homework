import React, {useEffect, useState} from "react";
import modalData from "../Modal/ModalData";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./ProductList.scss"
import IconDelete from "../IconDelete/IconDelete";

export let basketIcon = []
export let favoriteArr = []

const ProductList = ({arrayProduct, pages}) => {
    const [modalObject, setModalObject] = useState({})
    const [modalToShow, setModalToShow] = useState("none")
    const [basket, setBasket] = useState({})
    const [basketArray, setBasketArray] = useState(null)
    const [numberButton, setNumberButton] = useState(null)
    const [favorite, setFavorite] = useState('')



    useEffect(() => {
        setBasketArray(arrayProduct)
        if (localStorage.getItem("basketIcon")) {
            basketIcon = JSON.parse(localStorage.getItem("basketIcon"))
        }
    }, [arrayProduct])

    const openModal = (e) => {
        const modalID = e.target.dataset.modalId;
        setNumberButton(+e.target.id)
        const modalDeclaration = modalData.find(item => item.id === +modalID);
        setModalObject({...modalDeclaration})
        setModalToShow("Open modal")
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
                basketIcon.push(basket)
                localStorage.setItem("basketIcon", JSON.stringify(basketIcon))
            }
            if (pages === "Basket") {
                basketIcon.forEach(el => {
                    if (el.id === numberButton) {
                        const newArrayProduct = basketIcon.filter(newArr => newArr !== el)
                        basketIcon = newArrayProduct
                        setBasketArray(newArrayProduct)
                        localStorage.setItem("basketIcon", JSON.stringify(newArrayProduct))
                    }
                })
            }
        }
        setModalToShow("none")
    }

    const deleteProduct = (e) => {
        openModal(e)
        basketArray.forEach(ele => {
            if (ele.id === +e.target.id) {
                setBasket(ele)
            }
        })
    }

    const handelFavorite = (el) => {
        const button = el.target
        arrayProduct.forEach(el => {
            if (el.id === +button.id){
                // setFavorite(...favorite, el)
                // console.log(el)
            }
        })
        // console.log(button)
        button.classList.toggle("icon-favorite-add")
        console.log(favorite)
    }

    return (
        <>
            <div className="product-list__title">
                <h1>{pages}</h1>
            </div>
            {basketArray ?
                <div className="product-list">
                    {basketArray.map(card => {
                            return <ProductCard
                                iconDelete={pages === "Basket" &&
                                    <IconDelete id={card.id} onClick={deleteProduct} dataModalId={"2"}/>}
                                key={card.id}
                                card={card}
                                favorite={handelFavorite}
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
                    {modalToShow === "Open modal" &&
                        <Modal
                            onClick={closeModal}
                            header={modalObject.header}
                            closeButton={modalObject.closeButton}
                            text={modalObject.text}
                            action={modalObject.action}
                        />
                    }
                </div> : <p className="no-card">no card</p>}
        </>
    )
}

export default ProductList