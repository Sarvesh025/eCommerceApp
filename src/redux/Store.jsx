import { configureStore } from '@reduxjs/toolkit'
import order from './designs/orderSlice'

const store = configureStore({
    reducer: {
        order: order,
      },
})

export default store;