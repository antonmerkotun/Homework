import React, {useEffect} from "react";
import ProductList from "../../components/ProductList/ProductList";
import {ajaxProduct} from "../../redux/action";
import {connect} from "react-redux";

const Home = ({ajaxProduct, ajax = []}) => {

    useEffect(() => {
        fetch("productList.json")
            .then(response => response.json())
            .then(result => {
                ajaxProduct(result)
            })
    }, [ajaxProduct])
    return (
        <ProductList arrayProduct={ajax} pages={"Home"}/>
    )
}

const mapStateToProps = state => {
    return {
        ajax: state.ajax
    }
}

const mapDispatchToProps = {
    ajaxProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)