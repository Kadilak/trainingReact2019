import { createStore, combineReducers } from 'redux'
import { cardReducer } from './cardReducer';

function userReducer(state = {}, action) {
    return state;
}

const reducers = {
    cart: cardReducer, 
    user: userReducer
}

const store = createStore(combineReducers(reducers))

export default store