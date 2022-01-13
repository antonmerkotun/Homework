import {combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {ajaxReducer} from "./ajaxReducer";

export const rootReducer = combineReducers({
    ajax: ajaxReducer,
    modal: modalReducer,
})