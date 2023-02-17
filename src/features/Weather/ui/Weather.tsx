import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import {
    getWeatherFact,
    getWeatherForecast,
    isLoadingWeather,
    fetchWeather
} from "features/Weather";
import { getActiveGeoposition } from "widgets/GeopositionModal";
import { WeatherForecast } from "features/WeatherForecast";
import { WeatherCard } from "shared/ui";

import styles from './Weather.modules.scss';

export const Weather: FC = () => {
    const dispatch = useDispatch();
    const weather = useSelector(getWeatherFact);
    const weatherForecasts = useSelector(getWeatherForecast);
    const isLoading = useSelector(isLoadingWeather);
    const activeGeolocation = useSelector(getActiveGeoposition);

    useEffect(() => {
        if(activeGeolocation !== null) {
            dispatch(fetchWeather({longitude: activeGeolocation?.longitude, latitude: activeGeolocation?.latitude}));
        }
    }, [activeGeolocation]);


    return  (
        <div className={styles.container}>
            {!isLoading && weather ? (
                <>
                    <WeatherCard
                        temp={weather.temp}
                        longitude={weather.longitude}
                        windSpeed={weather.wind_speed}
                        latitude={weather.latitude}
                        time={weather.time}
                        humidity={weather.humidity}
                        feelsLike={weather.feels_like}
                        pressureMM={weather.pressure_mm}
                        condition={weather.condition}
                        locality={weather.locality}
                    />
                    <WeatherForecast weatherForecasts={weatherForecasts}/>
                </>

            ) : (<Spin size='large'/>)}
        </div>
    )
}