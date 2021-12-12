import React, {useEffect, useState} from "react";
import "./components/Button/Button.scss"
import modalData from "./components/Modal/ModalData";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.scss"
import "./components/ProductCard/ProductCard.scss"
import Header from "./components/Header/Header";

export let basketIcon = []

const App = () => {
    const [arrayProduct, setArrayProduct] = useState([])
    const [modalObject, setModalObject] = useState({})
    const [modalToShow, setModalToShow] = useState("none")
    const [basket, setBasket] = useState('')

    useEffect(() => {
        fetch("productList.json")
            .then(response => response.json())
            .then(result => {
                    setArrayProduct(result)
                }
            )
        if (basketIcon.length === 0) {
            basketIcon = JSON.parse(localStorage.getItem("basketIcon"))
        }
        if (basketIcon === null) {
            basketIcon = []
        }
    }, [])

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
            basketIcon.push(basket)
            setModalToShow("none")
            localStorage.setItem("basketIcon", JSON.stringify(basketIcon))
        }
    }


    // const setFavorite = (event) => {
    //     const el = event.target;
    //     const id = el.id
    //     if (id) {
    //         let favorites = JSON.parse(localStorage.getItem("favorite")) || []
    //         if (favorites.includes(id)) {
    //             el.classList = 'icon-favorite'
    //             favorites = favorites.filter(fId => fId !== id)
    //         } else {
    //             el.classList = 'icon-favorite-add'
    //             favorites.push(id)
    //         }
    //         localStorage.setItem(el.id, el.className)
    //         localStorage.setItem("favorite", JSON.stringify(favorites))
    //         setFavorites(favorites)
    //         // console.log(JSON.parse(localStorage.getItem('favorite')))
    //         // JSON.parse(localStorage.getItem('favorite')).forEach(e => {
    //         //     console.log(e)
    //         // })
    //     }
    // }

    return (
        <>
            <Header/>
            <div className="product-list">
                {arrayProduct.map(card => {
                        return <ProductCard
                            card={card}
                            key={card.id}
                            button={
                                <Button
                                    id={card.id}
                                    dataModalId="1"
                                    className="button-modal"
                                    backgroundColor={{background: "#FFF"}}
                                    onClick={openModal}
                                    text="Add to card"
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
            </div>
        </>
    )
}

export default App;
