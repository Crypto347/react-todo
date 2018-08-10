import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
//importiruem nujnie funktsii iz redux
import todos from '../reducers/todo.reducer';
//importiruem todo funktsiyu iz todo.reducer.js
import logger from 'redux-logger';
//importiruem  funktsiyu logger iz redux-logger
const reducers = combineReducers({// sozdaem constantu reducers kotora sobiraet vse reducery i peredaet ix v createStore odnoy funksiyey
    todos: todos
});

export default createStore(reducers, applyMiddleware(logger));//zabila posmotret v inete 4to zna4it applyMiddleware i logger.A sey4as uje ustala. posmotru potom :-)
