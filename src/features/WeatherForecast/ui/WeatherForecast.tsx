import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getWeatherForecastsActiveId,
    weatherForecastsActions,
    WeatherForecastsCard
} from "widgets/WeatherForecastsCard";
import { WeatherForecastType } from "features/Weather";

interface WeatherForecastProps {
    weatherForecasts: WeatherForecastType[];
}
export const WeatherForecast: FC<WeatherForecastProps> = ({weatherForecasts}) => {

    const dispatch = useDispatch();
    const activeForecast = useSelector(getWeatherForecastsActiveId);
    const setActiveForecast = (id: string) => () => {
        dispatch(weatherForecastsActions.setActiveForecastsId(id));
    }
    return (
        <div>
            {
                weatherForecasts.map((weather) => (
                    <WeatherForecastsCard
                        key={weather.time}
                        temp={weather.temp}
                        windSpeed={weather.windSpeed}
                        humidity={weather.humidity}
                        aggTemp={weather.avgTemp}
                        maxTemp={weather.maxTem}
                        minTemp={weather.minTemp}
                        date={weather.time}
                        pressureMM={weather.pressureMM}
                        setActiveForecast={setActiveForecast}
                        activeForecast={activeForecast}
                    />
                ))
            }
        </div>
    )
}