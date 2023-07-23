import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isLoading: boolean;
  products: Array<object>;
  productDetail: null | object;
  error: null | string | object;
}

const initialState: InitialStateType = {
  isLoading: false,
  products: [],
  productDetail: null,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getProductsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getProductDetailStart: (state) => {
      state.isLoading = true;
    },
    getProductDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.productDetail = action.payload;
    },
    getProductDetailError: (state, action) => {
      state.isLoading = false;
      state.productDetail = action.payload;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  getProductDetailStart,
  getProductDetailSuccess,
  getProductDetailError,
} = productSlice.actions;

export default productSlice.reducer;
