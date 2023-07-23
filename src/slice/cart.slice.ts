import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isLoading: boolean;
  carts: Array<object>;
  error: null | string;
}

const initialState: InitialStateType = {
  isLoading: false,
  carts: [],
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getAllCartStart: (state) => {
      state.isLoading = true;
    },
    getAllCartSuccess: (state, action) => {
      state.isLoading = false;
      state.carts = action.payload;
    },
    getAllCartError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addNewCartStart: (state) => {
      state.isLoading = true;
    },
    addNewCartSuccess: (state) => {
      state.isLoading = false;
    },
    addNewCartError: (state) => {
      state.isLoading = false;
      state.error = "Error";
    },
  },
});

export const {
  getAllCartStart,
  getAllCartSuccess,
  getAllCartError,
  addNewCartStart,
  addNewCartSuccess,
  addNewCartError,
} = cartSlice.actions;

export default cartSlice.reducer;
