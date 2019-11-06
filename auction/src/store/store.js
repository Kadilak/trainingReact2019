import {applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { cardReducer } from './cardReducer';
import userReducer from './userReducer';
import thunk from 'redux-thunk';

const reducers = {
    cart: cardReducer, 
    user: userReducer
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
if(process.env.NODE_ENV === 'production'){
    composeEnhancers = compose;
}

const store = createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(thunk))
    
)

export default store