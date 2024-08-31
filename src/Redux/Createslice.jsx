import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.title === item.title);
      if (!existingItem) {
        state.cartItems.push(item);
      }
    },
    remove(state,action){
      return state.filter((item)=>item.id !== action.payload);
  }
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
