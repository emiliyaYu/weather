import {StateSchema} from "app/providers";

export const getWeatherForecastsActiveId = (state: StateSchema) => state.weatherForecastsActive.activeForecastsId;