// cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, UPDATE_CART, UPDATE_TOTAL_ITEMS } from './Types';

const initialState = {
  cartItems: [],
  totalItems: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalItems: state.totalItems + 1
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload), // Исправлено на id товара
        totalItems: state.totalItems - 1
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload.item.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        })
      };
    case UPDATE_CART:
      return {
        ...state,
        cartItems: action.payload,
        totalItems: action.payload.length
      };
    case UPDATE_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
