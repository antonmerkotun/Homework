import {AJAX_PRODUCTS} from "../types";

export const initialState = {
    ajaxProducts: [],
}

export const ajaxReducer = (state = initialState, action) => {
    switch (action.type) {
        case AJAX_PRODUCTS:
            return {phone: action.payload}
        default: return state
    }
}