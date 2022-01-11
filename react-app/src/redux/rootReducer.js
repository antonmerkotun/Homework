import {combineReducers} from "redux";
import {modalReducer} from "./reducers/modalReducer";

export const rootReducer = combineReducers({
    modal: modalReducer
})