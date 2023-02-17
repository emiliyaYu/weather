import { WeatherState } from "../model/types/GetWeatherTypes";
import { WeatherApiSchema } from "../model/types/WeatherApiSchema";
import { getTime } from "shared/lib/getTime";
import { getWeatherDate } from "shared/lib/getWeatherDate";

export const getWeatherState = (data: WeatherApiSchema): WeatherState => {

    const locality = data.geo_object?.locality?.name;
    const condition = data.fact.condition;
    const temp = data.fact.temp;
    const feelsLike = data.fact.feels_like;
    const windSpeed = data.fact.wind_speed;
    const pressureMM = data.fact.pressure_mm;
    const humidity = data.fact.humidity;
    const longitude = data.info.lon;
    const latitude = data.info.lat;
    const time = getTime(data.now);

    const forecastWeather = data?.forecasts?.map((day) => ({
        condition: day.parts.day.condition,
        maxTem: day.parts.day.temp_max,
        minTemp: day.parts.day.temp_min,
        feelsLike: day.parts.day.feels_like,
        time: getWeatherDate(day.date_ts),
        windSpeed: day.parts.day.wind_speed,
        avgTemp: day.parts.day.temp_avg,
        pressureMM: day.parts.day.pressure_mm,
        humidity: day.parts.day.humidity,
        temp: day.parts.day.soil_temp

    })).slice(1);

    const weatherNow = {
        locality,
        latitude,
        longitude,
        condition,
        temp,
        feels_like: feelsLike,
        wind_speed: windSpeed,
        pressure_mm: pressureMM,
        humidity,
        time
    }

    return {
        weatherFact: weatherNow,
        weatherForecast: forecastWeather
    }

}