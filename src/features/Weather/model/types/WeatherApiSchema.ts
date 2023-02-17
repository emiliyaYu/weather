
interface Part {
    cloudness: number;
    condition: string;
    daytime: string;
    feels_like: number;
    fresh_snow_mm: number;
    humidity: number;
    icon: string;
    polar: boolean;
    prec_mm: number;
    prec_period: number;
    prec_prob: number;
    prec_strength: number;
    prec_type: number;
    pressure_mm: number;
    pressure_pa: number;
    soil_moisture: number;
    soil_temp: number;
    temp_avg: number;
    temp_max: number;
    temp_min: number;
    uv_index: number;
    wind_dir: string;
    wind_gust: number;
    wind_speed: number;
    _source: string;
}

interface Geo {
    id: number;
    name: string;
}
export interface WeatherApiSchema {
    now: number;
    now_dt: number;
    yesterday: {
        temp: string;
    };
    info: {
        def_pressure_mm: number;
        def_pressure_pa: number;
        f: boolean;
        geoid: number;
        lat: number;
        lon: number;
        n: boolean;
        nr: boolean;
        ns: boolean;
        nsr: boolean;
        p: boolean;
        slug: string;
        tzinfo: {
            abr: string;
            dst: boolean;
            name: string;
            offset: number;
        };
        zoom: number;
        _h: boolean;
    };
    fact: {
        cloudness: number;
        condition: string;
        daytime: string;
        feels_like: number;
        humidity: number
        icon: string;
        is_thunder: boolean;
        obs_time: number;
        polar: boolean;
        prec_prob: number;
        prec_strength: number;
        prec_type: number;
        pressure_mm: number;
        pressure_pa: number;
        season: string;
        soil_moisture: number;
        soil_temp: number;
        source: string;
        temp: number;
        uptime: number;
        uv_index: number;
        wind_dir: string;
        wind_gust: number;
        wind_speed: number;
    },
    forecasts: {
        biomet: {
            condition: string;
            index: number;
        };
        date: string;
        date_ts: number;
        hours: {
            cloudness: number;
            condition: string;
            hour: string;
            hour_ts: number;
            feels_like: number;
            humidity: number
            icon: string;
            is_thunder: boolean;
            prec_prob: number;
            prec_mm: number
            prec_period: number;
            prec_strength: number;
            prec_type: number;
            pressure_mm: number;
            pressure_pa: number;
            season: string;
            soil_moisture: number;
            soil_temp: number;
            temp: number;
            uv_index: number;
            wind_dir: string;
            wind_gust: number;
            wind_speed: number;
        }[];
        moon_code: number;
        moon_text: string;
        rise_begin: string;
        set_end: string;
        sunrise: string;
        sunset: string;
        week: number;
        parts: {
           morning: Part;
           day: Part;
           day_short: Part;
           evening: Part;
           night: Part;
           night_short: Part
        }
    }[];
    geo_object: {
        country: Geo | null;
        district: Geo | null;
        locality: Geo | null;
        province: Geo | null;
    }
}