import { ADD_TO_CART } from "./cardActions";

export function cardReducer(state = [{title:'hellooooo'}], action) {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state,action.auction];
        default:
            return state;
    }
}