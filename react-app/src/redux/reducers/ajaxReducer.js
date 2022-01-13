import {initialState} from "../store";
import {AJAX_PRODUCTS} from "../type/types";


export const ajaxReducer = (state = initialState.ajaxProducts, action) => {
    switch (action.type) {
        case AJAX_PRODUCTS:
            return action.payload
        default: return state
    }
}