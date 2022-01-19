import {AJAX_PRODUCTS} from "../types";

export function ajaxProduct() {
    return async dispatch => {
        const response = await fetch('productList.json')
        const json = await response.json()
        dispatch({
            type: AJAX_PRODUCTS,
            payload: json
        })
    }
}