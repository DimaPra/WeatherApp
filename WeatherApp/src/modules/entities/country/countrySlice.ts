import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        country: {},
        city: {},
        countryList: [],
        cityList: [],
    },
    reducers: {
        saveCountry: (state, action) => {
            state.country = action.payload
        },
        saveCountryList: (state, action) => {
            state.countryList = action.payload
        },
        saveCity: (state, action) => {
            state.city = action.payload
        },
        saveCityList: (state, action) => {
            state.cityList = action.payload
        },
    }
}
)
export const { saveCountry, saveCity, saveCountryList, saveCityList } = countrySlice.actions;

// Selectors 
export const selectCountry = (store) => store.country.country;
export const selectCity = (store) => store.country.city;
export const countryList = (store) => store.country.countryList;
export const cityList = (store) => store.country.cityList;