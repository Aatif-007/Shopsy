import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Createslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
