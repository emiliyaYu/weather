import { format, fromUnixTime } from "date-fns";

export const getWeatherDate = (date: number):string => {
    const time = new Date(fromUnixTime(date));
    return format(time, 'EEEE-d-MMMM');
}