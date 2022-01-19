import {combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {todosReducer} from "./ajaxReducer";
import {basketReducer} from "./basketReducer";

export const rootReducer = combineReducers({
    ajax: todosReducer,
    basket: basketReducer,
    // favorite: favoriteReducer,
    modal: modalReducer,
})