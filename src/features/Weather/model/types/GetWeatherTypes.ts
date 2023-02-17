export interface GetWeatherProps {
    longitude: number;
    latitude: number;
}

export interface WeatherForecast {
    condition: string,
    maxTem: number,
    minTemp: number
    feelsLike: number,
    time: string,
    windSpeed: number,
    avgTemp: number,
    pressureMM: number,
    humidity: number;
    temp: number;
}

export interface WeatherState {
    weatherFact: {
        locality: string | null;
        latitude: number;
        longitude: number;
        temp: number;
        feels_like: number;
        wind_speed: number;
        pressure_mm: number;
        humidity: number;
        condition: string;
        time: string;
    }
    weatherForecast: WeatherForecast[]
}

export interface GetWeatherSchema {
    data: WeatherState | null;
    error: any,
    isLoading: boolean,
}