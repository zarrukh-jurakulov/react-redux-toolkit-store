import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/pruduct.slice";
import categorySlice from "../slice/category.slice";
import cartSlice from "../slice/cart.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categorySlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
