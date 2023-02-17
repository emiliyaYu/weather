import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "../services/GetWeather";
import type {GetWeatherSchema, WeatherState} from "../types/GetWeatherTypes";

const initialState: GetWeatherSchema = {
    data: null,
    error: null,
    isLoading: false
}

export const GetWeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action:PayloadAction<WeatherState>) => {
            return {
                isLoading: false,
                error: null,
                data: action.payload
            }
        })
        builder.addCase(fetchWeather.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        })
    }
})

export const { actions: getWeatherActions } = GetWeatherSlice;
export const { reducer: getWeatherReducer } = GetWeatherSlice;