import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? true : false,
})

export default store;
