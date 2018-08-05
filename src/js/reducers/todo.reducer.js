import {
    ADD_TODO
} from '../actions/todo.actions';

const defaultState = [];

export default function todos(state=defaultState, action){
    switch(action.type){
        case ADD_TODO: 
            // const names = state.map((todo)=>todo);
            // names.push(action.payload.todo);
            // return names;
            return [ 
                ...state,
                action.payload.todo
            ];
        default:
        return state;
    }
} 