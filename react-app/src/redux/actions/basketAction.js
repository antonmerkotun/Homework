import {BASKET_ARRAY} from "../types";

export function basketProduct(basket) {
    return async dispatch => {
        dispatch({
            type: BASKET_ARRAY,
            payload: basket
        })
    }
}