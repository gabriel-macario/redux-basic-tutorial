import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER, 
    VisiblityFilters 
} from './actions';
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisiblityFilters

function todosReducer (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, 
                {
                    text: action.text,
                    complted: false
                }
            ];

        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === todo.index) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            });

        default:
            return state;
    }
}

function visibilityFilterReducer(state = SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const appReducer = combineReducers({
    visibilityFilterReducer,
    todosReducer
})

export default appReducer;

