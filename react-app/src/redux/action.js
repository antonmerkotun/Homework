import {OPEN_MODAL, CLOSE_MODAL, AJAX_PRODUCTS} from "./types";

export function openModals() {
    return async dispatch => {
        dispatch({
            type: OPEN_MODAL,
            payload: "OPEN_MODAL"
        })
    }
}

export function closeModals() {
    return async dispatch => {
        dispatch({
            type: CLOSE_MODAL,
            payload: "CLOSE_MODAL"
        })
    }
}

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
