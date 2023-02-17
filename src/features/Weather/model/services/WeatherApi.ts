import axios from "axios";
import { GetWeatherProps } from "../types/GetWeatherTypes";
import { getWeatherState } from "../../lib/getWeather";

export const getWeather = async ({longitude, latitude}: GetWeatherProps) => {

    try {
        const weather = await axios.get(`http://localhost:8000?lat=${latitude}&lon=${longitude}`);
        return getWeatherState(weather.data);
    } catch (e) {
        return e;
    }
}

