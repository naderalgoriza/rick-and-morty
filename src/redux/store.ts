import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? true : false,
});

export type AppStore = ReturnType<typeof configureStore<RootState>>;

export default store;
