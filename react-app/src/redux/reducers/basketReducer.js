import {BASKET_ARRAY} from "../types";

const initialState = {
    basketProducts: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type){
        case BASKET_ARRAY :
            return {...state, basketProducts: action.payload}
        default: return state
    }
}