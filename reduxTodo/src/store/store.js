import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Feature/todoSlice.js'

export const store = configureStore({
    reducer: todoReducer
})  