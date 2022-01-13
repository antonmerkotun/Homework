import React, {useEffect} from "react";
import ProductList from "../../components/ProductList/ProductList";
import {ajaxProduct} from "../../redux/action";
import {connect} from "react-redux";

const Home = ({ajaxProduct, ajaxProd = []}) => {

    useEffect(() => {
        fetch("productList.json")
            .then(response => response.json())
            .then(result => {
                ajaxProduct(result)
            })
    }, [ajaxProduct])
    return (
        <ProductList arrayProduct={ajaxProd} pages={"Home"}/>
    )
}

const mapStateToProps = state => {
    return {
        ajaxProd: state.ajax.phone
    }
}

const mapDispatchToProps = {
    ajaxProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)