import { combineReducers } from '@reduxjs/toolkit'
import loaderReducer from "./slices/loaderSlice";

const rootReducer = combineReducers({
  loader: loaderReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
