import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    // ADD TO CART
    addToCart: (state, action) => {

      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.cart.push({
          ...action.payload,
          quantity: 1,
        });

      }
    },

    // REMOVE FROM CART
    removeFromCart: (state, action) => {

      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );

    },

    // INCREASE QUANTITY
    increaseQty: (state, action) => {

      const item = state.cart.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // DECREASE QUANTITY
    decreaseQty: (state, action) => {

      const item = state.cart.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

    },

  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;