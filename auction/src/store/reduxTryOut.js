import { createStore } from 'redux'

function counterReducer(state = {point:0}, action) {
    console.log(state,action);
    switch (action.type) {
        case 'INCREMENT':
            return {...state,...{point: state.point + 1}}
        case 'DECREMENT':
            return {...state,...{point: state.point - 1}}
        case 'INCREMENT_BY_X':
            return {...state,...{point: state.point + action.payload}}
        default:
            return state
    }
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

const inc = {type: 'INCREMENT'};
const dec = {type: 'DECREMENT'};
const dec_x = {type: 'INCREMENT_BY_X', payload: 0};

function incrementByX(x){
    return {...dec_x,...{payload: x}}
}



store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch(incrementByX(10))
store.dispatch(inc)
store.dispatch(inc)
store.dispatch(inc)
// 2
store.dispatch(dec)
store.dispatch(dec)
