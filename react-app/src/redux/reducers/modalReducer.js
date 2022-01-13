import {initialState} from "../store";
import {CLOSE_MODAL, OPEN_MODAL} from "../types";


export const modalReducer = (state = initialState.stateModal, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.payload
        case CLOSE_MODAL:
            return action.payload
        default: return state
    }
}