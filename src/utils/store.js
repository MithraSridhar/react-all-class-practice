import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'

export const store = configureStore({
    reducer: {
        cart:CartSlice
      //providing name for reducer as myExpenditure
    }
  })