import { createSlice } from "@reduxjs/toolkit";
import { TLoaderState } from "../types/loader";

const initialLoaderState: TLoaderState = {
  count: 0
}

const loaderSlice = createSlice({
  name: "loader",
  initialState: initialLoaderState,
  reducers: {
    incrementLoader: (state) => {
      state.count++;
    },
    decrementLoader: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
  }
})

export const loaderActions = loaderSlice.actions;

export const loaderSelector = (state: { loader: TLoaderState }) => state.loader;

export default loaderSlice.reducer;
