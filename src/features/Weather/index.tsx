import { Weather } from "./ui/Weather";
import type { GetWeatherSchema } from "./model/types/GetWeatherTypes";
import { getWeatherReducer, getWeatherActions } from "./model/slices/GetWeatherSlice";
import { fetchWeather } from "./model/services/GetWeather";
import { WeatherForecast as WeatherForecastType } from "./model/types/GetWeatherTypes";
import {
    getWeatherData,
    getWeatherFact,
    isLoadingWeather,
    getWeatherForecast,
} from "./model/selectors/GetWeatherNow";

export {
    Weather,
    getWeatherFact,
    isLoadingWeather,
    getWeatherData,
    getWeatherForecast,
    GetWeatherSchema,
    getWeatherActions,
    getWeatherReducer,
    fetchWeather,
    WeatherForecastType
};