import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    SelectGeopositionModalSchema,
    GeopositionData
} from "widgets/SelectGeopositionModal";


const initialState: SelectGeopositionModalSchema = {
    open: false,
    geopositionsData: []
}

const SelectGeopositionModalSlice = createSlice({
    name: 'selectGeopositionModal',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                open: action.payload
            }
        },
        setGeopositionData: (state, action: PayloadAction<GeopositionData[]>) => {
            return {
                ...state,
                geopositionsData: action.payload
            }
        }
}})

export const { actions: selectGeopositionModalActions } = SelectGeopositionModalSlice;
export const { reducer: selectGeopositionModalReducer } = SelectGeopositionModalSlice;