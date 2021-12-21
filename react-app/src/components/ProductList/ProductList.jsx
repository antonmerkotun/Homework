import React, {useEffect, useState} from "react";
import modalData from "../Modal/ModalData";
import ProductCard, {favoriteArr} from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import {observer} from "mobx-react-lite";

export let basketIcon = []

const ProductList = observer(({product, type}) => {
    const [arrayProduct, setArrayProduct] = useState([])
    const [modalObject, setModalObject] = useState({})
    const [modalToShow, setModalToShow] = useState("none")
    const [basket, setBasket] = useState('')

    useEffect(() => {
        if (type === 'product_list') {
            fetch("productList.json")
                .then(response => response.json())
                .then(result => {
                    setArrayProduct(result)
                })
            if (basketIcon.length === 0) {
                basketIcon = JSON.parse(localStorage.getItem("basketIcon"))
            }
            if (basketIcon === null) {
                basketIcon = []
            }
        } else if (type === 'basket' || type === 'favorite') {
            setArrayProduct(product)
        }
    })

    const openModal = (e) => {
        const modalID = e.target.dataset.modalId;
        const modalDeclaration = modalData.find(item => item.id === +modalID);
        setModalObject({...modalDeclaration})
        setModalToShow("Open modal")
        arrayProduct.forEach(ele => {
            if (ele.id === +e.target.id) {
                setBasket(ele)
            }
        })
    }

    const closeModal = (e) => {
        const target = e.target.className
        if (target === "modal" ||
            target === "modal_header-button" ||
            target === "modal_body-buttons-cancel") {
            setModalToShow("none")
        }
        if (target === "modal_body-buttons-save") {
            if (type === "product_list") {
                basketIcon.push(basket)
                setModalToShow("none")
                localStorage.setItem("basketIcon", JSON.stringify(basketIcon))
            }
        }
    }

    return (
        <>
            <h1>{type}</h1>
            {arrayProduct === null && <p>no card</p>}
            {arrayProduct &&
                <div className="product-list">
                    {arrayProduct.map(card => {
                            return <ProductCard
                                type={type}
                                card={card}
                                key={card.id}
                                button={type === "favorite" ||
                                    <Button
                                        id={card.id}
                                        dataModalId={type === "product_list" && "1" || type === "basket" && "2"}
                                        className="button-modal"
                                        backgroundColor={{background: "#FFF"}}
                                        onClick={openModal}
                                        text={type === "product_list" && "Add to card" || type === "basket" && "Delete"}
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
                </div>}
        </>
    )
})

export default ProductList