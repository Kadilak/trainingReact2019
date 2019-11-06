export const ADD_TO_CART = 'ADD_TO_CART';
export const CART_ITEM_COUNT = 'CART_ITEM_COUNT';

export const addItemToCart = (auction) => ({type: ADD_TO_CART, auction: auction})

export const getCartItemCount = () => ({type: CART_ITEM_COUNT})