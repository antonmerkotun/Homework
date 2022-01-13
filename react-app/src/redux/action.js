import {OPEN_MODAL, CLOSE_MODAL, AJAX_PRODUCTS} from "./types";

export function openModals() {
    return {
        type: OPEN_MODAL,
        payload: "OPEN_MODAL"
    }
}

export function closeModals() {
    return {
        type: CLOSE_MODAL,
        payload: "CLOSE_MODAL"
    }
}

export function ajaxProduct(ajax) {
    return {
        type: AJAX_PRODUCTS,
        payload: ajax
    }
}
