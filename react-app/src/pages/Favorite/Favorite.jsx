import React from "react";
import ProductList from "../../components/ProductList/ProductList";

const Favorite = () => {
  const product = JSON.parse(localStorage.getItem("favoriteArray"))

  return(
      <ProductList arrayProduct={product} pages={"Favorite"}/>
  )
}

export default Favorite