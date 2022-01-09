import React, {useEffect, useState} from "react";
import "./ProductCard.scss"
import PropTypes from "prop-types";

const ProductCard = (props) => {
    const {card, iconDelete} = props
    const [favorite, setFavorite] = useState(null)

    useEffect(() => {
        const historyFavorite = JSON.parse(localStorage.getItem("favoriteArray"))
        if (historyFavorite) {
            historyFavorite.forEach(e => {
                if (e.id === card.id) {
                    setFavorite("icon-favorite-add")
                }
            })
        }
    })

    return (
        <>
            <div className={"card"}>
                <div className={"card_icon-article"}>
                    <button id={card.id}
                            className={`icon-favorite ${favorite}`}
                            onClick={props.favoriteFunc}
                    />
                    <span className={"card-article"}>article: {card.article}</span>
                    {iconDelete}
                </div>
                <img className={"card-image"} src={card.src} alt={"img"}/>
                <div className={"card_body"}>
                    <h4 className={"card_body-name"}>{card.productName}</h4>
                    <p className={"card_body-price"}>Price: {card.price} $</p>
                    <p className={"card_body-color"}>Color: {card.color}</p>
                </div>
                {props.button}
            </div>
        </>
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