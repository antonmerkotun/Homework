import React from "react";
import "./components/Button/Button.scss"
import modalData from "./components/Modal/ModalData";
import ProsuctCard from "./components/ProsuctCard/ProsuctCard.jsx";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.scss"
import "./components/ProsuctCard/ProsuctCard.scss"

let basketIcon = []

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayProduct: [],
      modalObject: {},
      modalToShow: "none",
      basket: '',
    }
  }

  componentDidMount() {
    fetch("productList.json")
        .then(response => response.json())
        .then(result => {
              this.setState({
                arrayProduct: result
              });
            }
        )
    if (basketIcon.length === 0) {
      basketIcon = JSON.parse(localStorage.getItem("basketIcon"))
    }
    if (basketIcon === null) {
      basketIcon = []
    }
  }

  openModal = (e) => {
    const modalID = e.target.dataset.modalId;
    const modalDeclaration = modalData.find(item => item.id === +modalID);
    this.setState({
      modalObject: {...modalDeclaration},
      modalToShow: "Open modal",
    })
    this.state.arrayProduct.forEach(ele => {
      if (ele.id === +e.target.id) {
        this.setState({
          basket: ele
        })
      }
    })
  }

  closeModal = (e) => {
    const target = e.target.className
    if (target === "modal" ||
        target === "modal_header-button" ||
        target === "modal_body-buttons-cancel") {
      this.setState({
        modalToShow: "none"
      })
    }
    if (target === "modal_body-buttons-save") {
      basketIcon.push(this.state.basket)
      this.setState({
        modalToShow: "none"
      })
      localStorage.setItem("basketIcon", JSON.stringify(basketIcon))
    }
  }

  setFavorite = (e) => {
    e.target.classList.toggle('icon-favorite-add')
    const className = e.target.className
    this.state.arrayProduct.forEach(ele => {
      if (+e.target.id === ele.id) {
        localStorage.setItem(ele.id, className)
      }
    })
  }

  // setFavorite = (event) => {
  //     const el = event.target;
  //     const id = el.id
  //     if (id) {
  //         let favorites = JSON.parse(localStorage.getItem("favorite")) || []
  //         if (favorites.includes(id)) {
  //             // delete
  //             el.classList = 'icon-favorite'
  //             favorites = favorites.filter(fId => fId !== id)
  //         } else {
  //             //add
  //             el.classList = 'icon-favorite-add'
  //             favorites.push(id)
  //         }
  //
  //         localStorage.setItem("favorite", JSON.stringify(favorites))
  //     }
  // }

  render() {
    return (
        <>
          <div className={"header"}>
            <button className={"button-favorite"}>Favorite</button>
            <div>
              <button className={"basket"}/>
              <span className={"basket-number"}>{basketIcon.length}</span>
            </div>
          </div>
          <div className="product-list">
            {this.state.arrayProduct.map(e => (
                    <ProsuctCard
                        id={e.id}
                        icon={localStorage.getItem(e.id)}
                        key={e.id}
                        onClick={this.setFavorite}
                        article={e.article}
                        src={e.src}
                        productName={e.productName}
                        price={e.price}
                        color={e.color}
                        button={
                          <Button
                              id={e.id}
                              dataModalId="1"
                              className="button-modal"
                              backgroundColor={{background: "#FFF"}}
                              onClick={this.openModal}
                              text="Add to card"
                          />
                        }
                    />
                )
            )}
            {this.state.modalToShow === "Open modal" &&
                <Modal
                    onClick={this.closeModal}
                    header={this.state.modalObject.header}
                    closeButton={this.state.modalObject.closeButton}
                    text={this.state.modalObject.text}
                    action={this.state.modalObject.action}
                />
            }
          </div>
        </>
    )
  }
}

export default App;