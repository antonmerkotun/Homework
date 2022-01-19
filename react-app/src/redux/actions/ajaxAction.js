import {ADD_TODO_STARTED, ADD_TODO_SUCCESS, ADD_TODO_FAILURE} from "../types";

export const addTodo = (API) => {
    return async dispatch => {
        dispatch(addTodoStarted());
        await fetch(API)
            .then(res => res.json())
            .then(res => dispatch(addTodoSuccess(res)))
            .catch(err => dispatch(addTodoFailure(err.message)));
    };
};

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: todo
});

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});