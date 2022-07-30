import { configureStore } from '@reduxjs/toolkit'

import carReducer from "../featuers/car/carSlice"

export const store = configureStore({
    reducer : {
        car: carReducer,
    },
});