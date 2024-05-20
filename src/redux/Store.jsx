import { configureStore } from '@reduxjs/toolkit'
import designReducer from './designs/designLists'

export const store = configureStore({
    reducer: {
        designs: designReducer,
      },
})