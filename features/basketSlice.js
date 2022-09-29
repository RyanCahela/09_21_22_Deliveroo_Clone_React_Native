import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // state.items = state.items.filter((item) => item.id === action.id);
      let newState = { ...state };
      const itemIndex = newState.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        newState.items.splice(itemIndex, 1);
      }

      state = newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => {
  return state.basket.items.filter((item) => id === item.id);
};

export default basketSlice.reducer;
