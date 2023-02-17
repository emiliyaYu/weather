import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useGeolocated } from "react-geolocated";
import {
    CurrentGeoposition,
    getGeopositionModalAccess,
    getGeopositionModalCurrentGeo,
    geopositionModalActions
} from "widgets/GeopositionModal";
import {
    GeopositionAccess,
    LOCAL_STORAGE_ACTIVE_GEOPOSITION,
    LOCAL_STORAGE_GEOPOSITION_ACCESS_KEY,
    LOCAL_STORAGE_SAVED_GEOPOSITIONS
} from "shared/config";
import {
    getSelectGeopositionModalData,
    selectGeopositionModalActions
} from "widgets/SelectGeopositionModal";
import { MainPageView } from "pages/MainPage";


const MainPage: FC = () => {
    const dispatch = useDispatch();
    const savedGeopositionsData = useSelector(getSelectGeopositionModalData);
    const currentGeoposition = useSelector(getGeopositionModalCurrentGeo);

    const geolocationAccessLS = localStorage.getItem(LOCAL_STORAGE_GEOPOSITION_ACCESS_KEY);
    const savedGeolocationsLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SAVED_GEOPOSITIONS));
    const geolocationAccess = useSelector(getGeopositionModalAccess);

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            isOptimisticGeolocationEnabled: geolocationAccess !== null,
            watchPosition: true
        });
    const access = isGeolocationEnabled ? GeopositionAccess.YES : GeopositionAccess.NO;
    const activeSavedGeopositionData = savedGeopositionsData.filter((geo:CurrentGeoposition) => geo.isActive);
    const isActiveSavedGeopositions = activeSavedGeopositionData.length > 0;

    useEffect(() => { // проверяем есть ли доступ в браузере --> пушим в стор, меняем LS
        if(geolocationAccessLS !== null) {
            dispatch(geopositionModalActions.setAccess(access));
            localStorage.setItem(LOCAL_STORAGE_GEOPOSITION_ACCESS_KEY, access);
        }
    }, [access, geolocationAccess]);

    useEffect(() => { // если есть доступ, то запрашиваем координаты текущей локации (координаты долго доходят)
        if(geolocationAccess === GeopositionAccess.YES && coords) {
            const {longitude, latitude} = coords;
            dispatch(geopositionModalActions.setCurrentGeoposition({ longitude, latitude, title: '', isActive: !isActiveSavedGeopositions }))
        }
    }, [geolocationAccess, coords]);

    useEffect(() => { // пуш в LS сохраненных локаций
        localStorage.setItem(LOCAL_STORAGE_SAVED_GEOPOSITIONS, JSON.stringify(savedGeopositionsData));
    }, [savedGeopositionsData]);

    useEffect(() => { // пуш в стор сохраненных локаций из LS
        if(savedGeolocationsLS !== null) {
            dispatch(selectGeopositionModalActions.setGeopositionData(savedGeolocationsLS))
        }
    }, []);

    useEffect(() => { // определение текущей выбранной локации
        if(geolocationAccess === GeopositionAccess.YES) {
            if(isActiveSavedGeopositions) {
                dispatch((geopositionModalActions.setActiveGeoposition(activeSavedGeopositionData[0])));
                localStorage.setItem(LOCAL_STORAGE_ACTIVE_GEOPOSITION, JSON.stringify(activeSavedGeopositionData[0]));
            }
            if(!isActiveSavedGeopositions && currentGeoposition) {
                dispatch((geopositionModalActions.setActiveGeoposition(currentGeoposition)));
                localStorage.setItem(LOCAL_STORAGE_ACTIVE_GEOPOSITION, JSON.stringify(currentGeoposition));
            }
        }
    }, [isActiveSavedGeopositions, geolocationAccess, currentGeoposition]);

    const selectGeoposition = useCallback(() => {
        dispatch(selectGeopositionModalActions.setOpen(true));
    }, []);

    return (
       <MainPageView
           isGeolocationAvailable={isGeolocationAvailable}
           isGeolocationEnabled={isGeolocationEnabled}
           selectGeoposition={selectGeoposition}
       />
    )
}

export default MainPage;