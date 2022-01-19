import {BASKET_ARRAY} from "../types";

export function basketAction(basket) {
    return async dispatch => {
        dispatch({
            type: BASKET_ARRAY,
            payload: basket
        })
    }
}