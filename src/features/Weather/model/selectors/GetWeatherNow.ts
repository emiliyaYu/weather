import {StateSchema} from "app/providers";
import {createSelector} from "@reduxjs/toolkit";

export const getWeatherData = (state: StateSchema) => state.weather.data
export const isLoadingWeather = (state: StateSchema) => state.weather.isLoading;
export const isErrorWeather = (state: StateSchema) => state.weather.error;

export const getWeatherFact = createSelector(
    getWeatherData,
    (weather) => weather?.weatherFact
);

export const getWeatherForecast = createSelector(
    getWeatherData,
    (weather) => weather?.weatherForecast
);
