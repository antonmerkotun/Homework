import React, {useEffect, useState} from "react";
import "./ProductCard.scss"
import PropTypes from "prop-types";

export let favorite = []

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
            // localStorage.setItem("favoriteArray" , JSON.stringify(card))
        }
    }

    return (
        <div className={"card"}>
            <div className={"card_icon-article"}>
                <button id={card.id}
                        className={`icon-favorite ${favorite}`}
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