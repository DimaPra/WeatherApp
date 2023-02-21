import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weathers',
    initialState: {
        weather: {},
    },
    reducers: {
        saveWeather: (state, action) => {
            state.weather = action.payload
        },
    }
})
export const { saveWeather } = weatherSlice.actions;

// Selectors 
export const selectWeather = (store) => store.weathers.weather;

console.log(selectWeather);