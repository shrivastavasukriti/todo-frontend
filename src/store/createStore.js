import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware  from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../todo/reducers/todoListReducers'

export const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));
