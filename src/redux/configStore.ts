import { configureStore } from '@reduxjs/toolkit'
import produce from 'immer';
import productReducer from './productReducer/productReducer';
export const store = configureStore({
    reducer: {
        productReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch