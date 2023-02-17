import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { CurrentGeopositionFormSchema } from "widgets/CurrentGeopositionForm";

const initialState: CurrentGeopositionFormSchema = {
    isEditTitle: false,
    title: ''
}

const CurrentGeopositionFormSlice = createSlice({
    name: 'currenGeopositionForm',
    initialState,
    reducers: {
        setIsEditTitle: (state, action: PayloadAction<boolean>) => ({
            ...state,
            isEditTitle: action.payload
        }),
        setTitle: (state, action: PayloadAction<string>) => ({
            ...state,
            title: action.payload
        })
    }
});

export const { actions: currentGeopositionFormActions } = CurrentGeopositionFormSlice;
export const { reducer: currentGeopositionFormReducer } = CurrentGeopositionFormSlice;