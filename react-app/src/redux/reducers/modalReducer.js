import {CLOSE_MODAL, OPEN_MODAL} from "../type/types";
import {initialState} from "../store";


export const modalReducer = (state = initialState.stateModal, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.payload
        case CLOSE_MODAL:
            return action.payload
        default: return state
    }
}