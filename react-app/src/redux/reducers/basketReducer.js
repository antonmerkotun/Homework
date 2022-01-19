import {BASKET_ARRAY} from "../types";

const initialState = {
    basket: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type){
        case BASKET_ARRAY :
            return {...state, basket: action.payload}
        default: return state
    }
}