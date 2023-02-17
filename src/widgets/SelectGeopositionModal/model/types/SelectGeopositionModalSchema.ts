import { CurrentGeoposition } from "widgets/GeopositionModal/model/types/GeopositionModalSchema";

export interface GeopositionData extends CurrentGeoposition {
    isActive: boolean,
    id: string,
}
export interface SelectGeopositionModalSchema {
    open: boolean,
    geopositionsData: GeopositionData[] | [];

}