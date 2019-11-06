import {applyMiddleware, createStore, combineReducers } from 'redux'
import { cardReducer } from './cardReducer';
import userReducer from './userReducer';
import thunk from 'redux-thunk';

const reducers = {
    cart: cardReducer, 
    user: userReducer
}

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

export default store