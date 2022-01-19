import {CLOSE_MODAL, OPEN_MODAL} from "../types";

const initialState = {
    stateModal: [],
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.payload
        case CLOSE_MODAL:
            return action.payload
        default:
            return state
    }
}