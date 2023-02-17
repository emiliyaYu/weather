import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetWeatherProps} from "../types/GetWeatherTypes";
import {getWeather} from "./WeatherApi";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({longitude, latitude}: GetWeatherProps, thunkAPI) => {
        return await getWeather({longitude, latitude});
    }
)