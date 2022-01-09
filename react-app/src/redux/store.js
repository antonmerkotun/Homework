import {createStore} from "redux";

const initialState = {
    modalState: "CLOSE_MODAL"
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "OPEN_MODAL":
            return {
                modalState: payload
            }

        case "CLOSE_MODAL":
            return {
                modalState: payload
            }

        default:
            return state
    }

}

const store = createStore(reducer)

export default store