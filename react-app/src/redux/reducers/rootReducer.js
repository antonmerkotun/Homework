import {combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {ajaxReducer} from "./ajaxReducer";
import {basketReducer} from "./basketReducer";

export const rootReducer = combineReducers({
    ajax: ajaxReducer,
    modal: modalReducer,
    basket: basketReducer,
})