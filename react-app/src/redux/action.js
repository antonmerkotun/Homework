import {OPEN_MODAL, CLOSE_MODAL} from "./type/types";

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
