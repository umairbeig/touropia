import { configureStore } from "@reduxjs/toolkit";
import tourReducer from '../redux/Slice.js'

const store=configureStore(
    {
        reducer: tourReducer
    }
)
export default store