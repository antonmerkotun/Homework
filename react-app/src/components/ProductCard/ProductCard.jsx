import React, {useEffect, useState} from "react";
import "./ProductCard.scss"
import PropTypes from "prop-types";


const ProductCard = (props) => {
    const {card} = props
    const [favorite, setFavorite] = useState('')

    useEffect(() => {
        const favoriteHistory = JSON.parse(localStorage.getItem("favorite"))
        if (favoriteHistory) {
            favoriteHistory.forEach(e => {
                if (+e === card.id) {
                    setFavorite("icon-favorite-add")
                }
            })
        }
    })


    // useEffect(() => {
    //     fetch("productList.json")
    //         .then(response => response.json())
    //         .then(result => {
    //                 setArrayProduct(result)
    //             }
    //         )
    //     if (basketIcon.length === 0) {
    //         basketIcon = JSON.parse(localStorage.getItem("basketIcon"))
    //     }
    //     if (basketIcon === null) {
    //         basketIcon = []
    //     }
    // }, [])
    //
    //
    const Favorites = (event) => {
        const el = event.target;
        const id = el.id
        if (id) {
            let favorites = JSON.parse(localStorage.getItem("favorite")) || []
            console.log(favorites)
            if (favorites.includes(id)) {
                el.classList = 'icon-favorite'
                favorites = favorites.filter(fId => fId !== id)
            } else {
                el.classList = 'icon-favorite-add'
                favorites.push(id)
            }
            localStorage.setItem("favorite", JSON.stringify(favorites))
            localStorage.setItem("favoriteArray" , JSON.stringify(card))

            // console.log(JSON.parse(localStorage.getItem("favoriteArray")))
        }
    }
    //
    // const openModal = (e) => {
    //     const modalID = e.target.dataset.modalId;
    //     const modalDeclaration = modalData.find(item => item.id === +modalID);
    //     setModalObject({...modalDeclaration})
    //     setModalToShow("Open modal")
    //     arrayProduct.forEach(ele => {
    //         if (ele.id === +e.target.id) {
    //             setBasket(ele)
    //         }
    //     })
    // }
    //
    // const closeModal = (e) => {
    //     const target = e.target.className
    //     if (target === "modal" ||
    //         target === "modal_header-button" ||
    //         target === "modal_body-buttons-cancel") {
    //         setModalToShow("none")
    //     }
    //     if (target === "modal_body-buttons-save") {
    //         basketIcon.push(basket)
    //         setModalToShow("none")
    //         localStorage.setItem("basketIcon", JSON.stringify(basketIcon))
    //     }
    // }

    return (
        <div className={"card"} key={card.id}>
            <div className={"card_icon-article"}>
                <button id={card.id} className={`icon-favorite ${favorite}`}
                        onClick={Favorites}/>
                <span className={"card-article"}>article: {card.article}</span>
            </div>
            <img className={"card-image"} src={card.src} alt={"img"}/>
            <div className={"card_body"}>
                <h4 className={"card_body-name"}>{card.productName}</h4>
                <p className={"card_body-price"}>Price: {card.price} $</p>
                <p className={"card_body-color"}>Color: {card.color}</p>
            </div>
            {props.button}
        </div>
    )
}

ProductCard.protoType = {
    id: PropTypes.number,
    icon: PropTypes.string,
    article: PropTypes.string,
    src: PropTypes.string,
    productName: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
}

export default ProductCard


// Class


// class ProductCard extends React.Component {
//     render() {
//         return (
//             <div className={"card"}>
//                 <div className={"card_icon-article"}>
//                     <button id={this.props.id} className={`icon-favorite ${this.props.icon}`}
//                             onClick={this.props.onClick}/>
//                     <span className={"card-article"}>article: {this.props.article}</span>
//                 </div>
//                 <img className={"card-image"} src={this.props.src} alt={"img"}/>
//                 <div className={"card_body"}>
//                     <h4 className={"card_body-name"}>{this.props.productName}</h4>
//                     <p className={"card_body-price"}>Price: {this.props.price} $</p>
//                     <p className={"card_body-color"}>Color: {this.props.color}</p>
//                 </div>
//                 {this.props.button}
//             </div>
//         )
//     }
// }