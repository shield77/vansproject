import { createStore } from 'redux';
import { combineReducers } from 'redux';
import cartReducer from './Reducers';

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;