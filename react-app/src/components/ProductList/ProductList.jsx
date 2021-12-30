import React, {useEffect, useState} from "react";
import modalData from "../Modal/ModalData";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./ProductList.scss"
import IconDelete from "../IconDelete/IconDelete";

export let basketIcon = []

const ProductList = ({arrayProduct, pages}) => {
    const [modalObject, setModalObject] = useState({})
    const [modalToShow, setModalToShow] = useState("none")
    const [basket, setBasket] = useState({})

    useEffect(() => {
        if (localStorage.getItem("basketIcon")) {
            basketIcon = JSON.parse(localStorage.getItem("basketIcon"))
        }
    }, [arrayProduct])

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
        if (pages === "Home") {
            if (target === "modal_body-buttons-save") {
                basketIcon.push(basket)
                localStorage.setItem("basketIcon", JSON.stringify(basketIcon))
            }
        }
        if (pages === "Basket") {
            if (target === "modal_body-buttons-save") {
                basketIcon.forEach(el => {
                    if (el.id === basket.id) {
                        const newBasket = basketIcon.filter(fId => fId !== el)
                        localStorage.setItem("basketIcon", JSON.stringify(newBasket))
                    }
                })
            }
        }
        setModalToShow("none")
    }

    const deleteProduct = (e) => {
        openModal(e)
        arrayProduct.forEach(ele => {
            if (ele.id === +e.target.id) {
                setBasket(ele)
            }
        })
    }

    return (
        <>
            <div className="product-list__title">
                <h1>{pages}</h1>
            </div>
            {arrayProduct === null && <p className="no-card">no card</p>}
            {arrayProduct &&
                <div className="product-list">
                    {arrayProduct.map(card => {
                            return <ProductCard
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
}

export default ProductList