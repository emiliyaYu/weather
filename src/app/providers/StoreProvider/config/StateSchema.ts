import { GeopositionModalSchema } from "widgets/GeopositionModal";
import { AccessDeniedModalSchema } from "widgets/AccessDeniedModal";
import { GetWeatherSchema } from "features/Weather";
import { SelectGeopositionModalSchema } from "widgets/SelectGeopositionModal";
import { CurrentGeopositionFormSchema } from "widgets/CurrentGeopositionForm";
import { AddGeopositionFormSchema } from "widgets/AddGeopositionForm";
import { GeopositionListSchema } from "widgets/GeopositionList";
import { WeatherForecastsSchema } from "widgets/WeatherForecastsCard";

export interface StateSchema {
    geopositionModal: GeopositionModalSchema,
    accessDeniedModal: AccessDeniedModalSchema,
    selectGeopositionModal: SelectGeopositionModalSchema
    weather: GetWeatherSchema,
    currentGeopositionForm: CurrentGeopositionFormSchema;
    addGeopositionForm: AddGeopositionFormSchema;
    geopositionList: GeopositionListSchema;
    weatherForecastsActive: WeatherForecastsSchema;
}