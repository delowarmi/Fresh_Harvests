import { configureStore } from '@reduxjs/toolkit'
import productSlice from './components/Slice/productsSlice'
export const store = configureStore({
  reducer: {
    products:productSlice
  },
})