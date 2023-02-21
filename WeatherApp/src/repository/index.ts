import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "../modules/entities/country/countrySlice";
import { weatherSlice } from "../modules/entities/weathers/weatherSlice";

const reducer = combineReducers({
    weathers: weatherSlice.reducer,
    country: countrySlice.reducer
})

export const store = configureStore({ reducer });