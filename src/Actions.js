// Actions.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, UPDATE_TOTAL_ITEMS, UPDATE_CART } from './Types';

export const updateTotalItems = (totalItems) => {
  return {
    type: UPDATE_TOTAL_ITEMS,
    payload: totalItems,
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = (itemId) => { // Изменено на передачу только id товара
  return {
    type: REMOVE_FROM_CART,
    payload: itemId
  };
};

export const updateQuantity = (item, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      item,
      quantity
    }
  };
};

export const updateCart = (items) => {
  return {
    type: UPDATE_CART,
    payload: items
  };
};
