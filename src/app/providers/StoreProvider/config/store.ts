import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from "./StateSchema";
import { geopositionModalReducer } from "widgets/GeopositionModal";
import { accessDeniedModalReducer } from "widgets/AccessDeniedModal";
import { selectGeopositionModalReducer } from "widgets/SelectGeopositionModal";
import { getWeatherReducer } from "features/Weather";
import { currentGeopositionFormReducer } from "widgets/CurrentGeopositionForm";
import { addGeopositionFormReducer } from "widgets/AddGeopositionForm";
import { geopositionListReducer } from "widgets/GeopositionList";
import { weatherForecastsReducer } from "widgets/WeatherForecastsCard";
import * as reduxThunk from "redux-thunk/extend-redux";




export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        geopositionModal: geopositionModalReducer,
        accessDeniedModal: accessDeniedModalReducer,
        weather: getWeatherReducer,
        selectGeopositionModal: selectGeopositionModalReducer,
        currentGeopositionForm: currentGeopositionFormReducer,
        addGeopositionForm: addGeopositionFormReducer,
        geopositionList: geopositionListReducer,
        weatherForecastsActive: weatherForecastsReducer
    }
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })

}


