import {initialState} from "../store";
import {AJAX_PRODUCTS} from "../types";


export const ajaxReducer = (state = initialState.ajaxProducts, action) => {
    switch (action.type) {
        case AJAX_PRODUCTS:
            return {phone: action.payload}
        default: return state
    }
}