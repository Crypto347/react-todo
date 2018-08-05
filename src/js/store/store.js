import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import todos from '../reducers/todo.reducer';

import logger from 'redux-logger';

const reducers = combineReducers({
    todos: todos
});

export default createStore(reducers, applyMiddleware(logger));
