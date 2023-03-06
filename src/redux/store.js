
import { configureStore, combineReducers } from "@reduxjs/toolkit";
// configureStore combineReducer
import authReducer from './slice/authSlice'
import filterReducer from './filterSlice/filterSlice';

const rootReducer = combineReducers(
    {
        auth: authReducer,
        filter:filterReducer,
    }
)

const store = configureStore({
    reducer: rootReducer,
})

export default store;