import React from "react";
import "./ProductCard.scss"
import PropTypes from "prop-types";


class ProductCard extends React.Component {
    render() {
        return (
            <div className={"card"}>
                <div className={"card_icon-article"}>
                    <button id={this.props.id} className={`icon-favorite ${this.props.icon}`}
                            onClick={this.props.onClick}/>
                    <span className={"card-article"}>article: {this.props.article}</span>
                </div>
                <img className={"card-image"} src={this.props.src} alt={"img"}/>
                <div className={"card_body"}>
                    <h4 className={"card_body-name"}>{this.props.productName}</h4>
                    <p className={"card_body-price"}>Price: {this.props.price} $</p>
                    <p className={"card_body-color"}>Color: {this.props.color}</p>
                </div>
                {this.props.button}
            </div>
        )
    }
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