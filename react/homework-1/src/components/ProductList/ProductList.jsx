import React from "react";
import "./ProductList.scss"
import Button from "../Button/Button";


class ProductList extends React.Component {

    openModal(){
        console.log("good")
    }
    render() {
        return (
            <div className={"card"}>
                <div className={"card-article"}>article: {this.props.article}</div>
                <img className={"card-image"} src={this.props.src} alt={"img"}/>
                <div className={"card_body"}>
                    <h4 className={"card_body-name"}>{this.props.productName}</h4>
                    <p className={"card_body-price"}>Price: {this.props.price} $</p>
                    <p className={"card_body-color"}>Color: {this.props.color}</p>
                </div>
                <Button
                    dataModalId="1"
                    className="button-modal"
                    backgroundColor={{background: "#fffff"}}
                    onClick={this.openModal}
                    text="Add to card"
                />
            </div>
        )
    }
}

export default ProductList;