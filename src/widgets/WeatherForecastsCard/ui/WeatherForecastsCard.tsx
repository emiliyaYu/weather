import {Title} from "shared/ui";
import styles from './WeatherForecasts.module.scss';
import {FC} from "react";
import classNames from "classnames";
import {da} from "date-fns/locale";

interface WeatherForecastsCardProps {
    date: string;
    minTemp: number;
    maxTemp: number;
    aggTemp: number;
    temp: number;
    pressureMM: number;
    humidity: number;
    windSpeed: number;
    setActiveForecast: (id: string) => () => void;
    activeForecast: string;
}

export const WeatherForecastsCard: FC<WeatherForecastsCardProps> = (props) => {
    const { date, minTemp, aggTemp, maxTemp, temp, windSpeed, pressureMM, humidity, setActiveForecast, activeForecast } = props;

    const splitDate = date.split('-');
    const week = splitDate[0];
    const month = `${splitDate[1]} ${splitDate[2]}`;

    return (
        <div className={styles.forecastsContainer} onClick={setActiveForecast(date)}>
            <div className={styles.titleContainer}>
                <div>
                    <Title text={week} level={3}/>
                    <Title text={month} level={5}/>
                </div>
                <span className={styles.temp}>{temp}</span>
            </div>
            <div className={classNames(styles.forecastInfo, {[styles.hide] : activeForecast === date})}>
                <div className={styles.row}>
                    <span className={styles.col}>Min temp:</span>
                    <span>{minTemp}</span>
                </div>
                <div className={styles.row}>
                    <span>Max temp:</span>
                    <span>{maxTemp}</span>
                </div>
                <div className={styles.row}>
                    <span>Avg temp:</span>
                    <span>{aggTemp}</span>
                </div>
                <div className={styles.row}>
                    <span>Pressure(mm):</span>
                    <span>{pressureMM}</span>
                </div>
                <div className={styles.row}>
                    <span>Humidity:</span>
                    <span>{humidity}</span>
                </div>
                <div className={styles.row}>
                    <span>Wind speed</span>
                    <span>{windSpeed}</span>
                </div>
            </div>
        </div>
    )
}