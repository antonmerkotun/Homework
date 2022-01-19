import {ADD_TODO_SUCCESS, ADD_TODO_STARTED, ADD_TODO_FAILURE} from "../types";

const initialState = {
    loading: false,
    todos: [],
    error: null
};

export  function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: [...action.payload],
                error: null
            };
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}