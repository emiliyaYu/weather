import {GeopositionData} from "widgets/SelectGeopositionModal";

export interface CurrentGeoposition {
    latitude: number | null,
    longitude: number | null,
    title: string,
    isActive: boolean;
}
export interface GeopositionModalSchema {
    title: string;
    open: boolean;
    access: string;
    currentGeoposition: null | CurrentGeoposition;
    activeGeoposition: CurrentGeoposition | GeopositionData| null;
}