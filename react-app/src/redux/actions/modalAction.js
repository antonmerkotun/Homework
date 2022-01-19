import {OPEN_MODAL, CLOSE_MODAL} from "../types";

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