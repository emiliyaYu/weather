import { fromUnixTime, getHours, getMinutes } from "date-fns";

export const getTime = (date: number): string => {
    const min = getMinutes(new Date(fromUnixTime(date)));
    const hours = getHours(new Date(fromUnixTime(date)));
    return `${hours} : ${min}`;
}