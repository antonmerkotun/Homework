import React, {useEffect} from "react";
import ProductList from "../../components/ProductList/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/actions/ajaxAction";

const Home = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.ajax.todos) || []

    useEffect(() => {
        dispatch((addTodo("productList.json")))
    }, [dispatch])

    return (
        <ProductList arrayProduct={product} pages={"Home"}/>
    )
}

export default Home;