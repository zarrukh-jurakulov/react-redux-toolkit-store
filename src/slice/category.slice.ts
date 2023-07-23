import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isLoading: boolean;
  categories: Array<object>;
  error: null | string | object;
}

const initialState: InitialStateType = {
  isLoading: false,
  categories: [],
  error: null,
};

export const catergorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoriesStart: (state) => {
      state.isLoading = true;
    },
    getCategoriesSuccess: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    getCategoriesError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCategoriesStart, getCategoriesSuccess, getCategoriesError } =
  catergorySlice.actions;
export default catergorySlice.reducer;
