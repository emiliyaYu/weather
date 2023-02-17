import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddGeopositionFormSchema } from "widgets/AddGeopositionForm";

const initialState: AddGeopositionFormSchema = {
    isAdding: false,
    latitude: null,
    longitude: null,
    title: ''
};
const AddGeopositionFormSlice = createSlice({
    name: 'addGeopositionForm',
    initialState,
    reducers: {
        setIsAdding: (state, action: PayloadAction<boolean>) => ({
            ...state,
            isAdding: action.payload
        }),
        setAddGeopositionForm: (state, action: PayloadAction<AddGeopositionFormSchema>) => ({
            ...action.payload
        })
    }
});

export const { actions: addGeopositionFormActions } = AddGeopositionFormSlice;
export const { reducer: addGeopositionFormReducer } = AddGeopositionFormSlice;