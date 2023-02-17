import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WeatherForecastsSchema} from "widgets/WeatherForecastsCard/model/type/WeatherForecastsSchema";

const initialState: WeatherForecastsSchema = {
    activeForecastsId: null
}

const WeatherForecastsSlice = createSlice({
    name: 'activeForecastsCard',
    initialState,
    reducers: {
        setActiveForecastsId: (state, action: PayloadAction<string>) => ({
            ...state,
            activeForecastsId: action.payload
        })
    }
});

export const { actions: weatherForecastsActions } = WeatherForecastsSlice;

export const { reducer: weatherForecastsReducer } = WeatherForecastsSlice;