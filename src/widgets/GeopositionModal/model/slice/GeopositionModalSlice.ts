import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GeopositionModalSchema } from "widgets/GeopositionModal";
import { CurrentGeoposition } from "widgets/GeopositionModal";
import {GeopositionData} from "widgets/SelectGeopositionModal";

const initialState: GeopositionModalSchema = {
    open: false,
    title: 'Do you agree to provide data about your geolocation?',
    access: '',
    currentGeoposition: null,
    activeGeoposition: null,
};

export const GeopositionModalSlice = createSlice({
    name: 'geopositionModal',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                open: action.payload
            }
        },
        setAccess: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                access: action.payload
            }
        },
        setCurrentGeoposition: (state, action: PayloadAction<CurrentGeoposition>) => {
            return {
                ...state,
                currentGeoposition: action.payload
            }
        },
        setActiveGeoposition: (state, action:PayloadAction<CurrentGeoposition | GeopositionData>) => ({
            ...state,
            activeGeoposition: action.payload
        })
    }
});
export const { actions: geopositionModalActions } = GeopositionModalSlice;
export const { reducer: geopositionModalReducer } = GeopositionModalSlice;