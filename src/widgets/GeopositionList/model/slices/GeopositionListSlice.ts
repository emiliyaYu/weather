import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeopositionListSchema } from "widgets/GeopositionList";

const initialState: GeopositionListSchema = {
    isEditList: false,
    editId: '',
    title: '',
}
const GeopositionListSlice = createSlice({
    name: 'geopositionList',
    initialState,
    reducers: {
        setIsEditList: (state, action: PayloadAction<boolean>) => ({
            ...state,
            isEditList: action.payload
        }),
        setTitle: (state, action: PayloadAction<string>) => ({
            ...state,
            title: action.payload
        }),
        setEditId: (state, action: PayloadAction<string>) => ({
            ...state,
            editId: action.payload
        })
    }
});

export const { actions: geopositionListActions } = GeopositionListSlice;
export const { reducer: geopositionListReducer } = GeopositionListSlice;