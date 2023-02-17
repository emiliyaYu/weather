import { FC } from "react"
import classNames from "classnames";
import { Col, Row } from "antd";
import { Title } from "shared/ui";
import styles from './WeatherCard.module.scss';

interface WeatherCardProps {
    longitude: number,
    latitude: number,
    time: string,
    temp: number,
    feelsLike: number,
    pressureMM: number,
    humidity: number,
    windSpeed: number;
    locality: string | null;
    condition: string;

}
export const WeatherCard:FC<WeatherCardProps> = (props) => {
    const { longitude, latitude, humidity, temp, time, feelsLike, pressureMM, windSpeed, locality, condition } = props;
    return (
        <div className={styles.weatherCard}>
            <Title text={locality} level={2}/>
            <span className={styles.time}>{time}</span>
            <span className={styles.time}>{condition}</span>
            <Row className={styles.row}>
                <Col span={2}>Longitude:</Col>
                <Col span={2}>{latitude}</Col>
            </Row>
            <Row className={styles.row}>
                <Col span={2}>Latitude:</Col>
                <Col span={2}>{longitude}</Col>
            </Row >
            <Row className={classNames(styles.row, styles.temp)}>
                <Col span={4}>Temp:</Col>
                <Col span={2}>{temp}</Col>
            </Row>
            <Row className={styles.row}>
                <Col span={4}>Feels like:</Col>
                <Col span={2}>{feelsLike}</Col>
            </Row>
            <Row className={styles.row}>
                <Col span={4}>Wind speed:</Col>
                <Col span={2}>{windSpeed}</Col>
            </Row>
            <Row className={styles.row}>
                <Col span={4}>Pressure(mm):</Col>
                <Col span={2}>{pressureMM}</Col>
            </Row>
            <Row className={styles.row}>
                <Col span={4}>Humidity:</Col>
                <Col span={2}>{humidity}</Col>
            </Row>
    </div>
    )
}