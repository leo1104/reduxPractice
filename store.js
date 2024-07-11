import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './src/redux/reducer/counterSlice';


export const store = configureStore({
  reducer: {
    cipher:counterReducer
  },
})