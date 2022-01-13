import {CLOSE_MODAL, OPEN_MODAL} from "../type/types";
import {initialState} from "../store";


export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {...state, stateModal: [action.payload]}
        case CLOSE_MODAL:
            return {...state, stateModal: [action.payload]}
        default: return state
    }
}