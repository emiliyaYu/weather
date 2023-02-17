import {StateSchema} from "app/providers";
import {createSelector} from "@reduxjs/toolkit";

export const getSelectGeopositionModal = (state: StateSchema) => state.selectGeopositionModal;

export const getSelectGeopositionModalIsOpen = createSelector(
    getSelectGeopositionModal,
    (selectGeopositionModal) => selectGeopositionModal.open
);

export const getSelectGeopositionModalData = createSelector(
    getSelectGeopositionModal,
    (selectGeopositionModal) => selectGeopositionModal.geopositionsData
)