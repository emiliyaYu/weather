import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccessDeniedModalSchema } from "widgets/AccessDeniedModal";

const initialState: AccessDeniedModalSchema = {
    title: 'Access geolocation denied',
    errorText: 'Please allow us to share your geolocation data',
    open: false
}

export const AccessDeniedModalSlice = createSlice({
    name: 'accessDeniedModal',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                open: action.payload
            }
        },
    }
})
export const { actions: accessDeniedModalActions } = AccessDeniedModalSlice;
export const { reducer: accessDeniedModalReducer } = AccessDeniedModalSlice;