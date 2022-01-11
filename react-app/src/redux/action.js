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


//
// export const OPENMODAL = {
//     type: OPEN_MODAL,
//     payload: "OPEN_MODAL"
// }
//
// export const CLOSEMODAL = {
//     type: CLOSE_MODAL,
//     payload: "CLOSE_MODAL"
// }

// export const OPEN_MODAL = value => ({
//     type: "OPEN_MODAL",
//     payload: value
// })
//
// export const CLOSE_MODAL = value => {
//     return {
//         type: "CLOSE_MODAL",
//         payload: value
//     }
// }