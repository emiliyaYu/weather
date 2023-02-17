import { StateSchema } from "app/providers";
import { createSelector } from "@reduxjs/toolkit";

export const getGeopositionModal = (state: StateSchema) => state.geopositionModal;
export const getGeopositionModalIsOpen = createSelector(
    getGeopositionModal,
    (geopositionModal) => geopositionModal.open
);
export const getGeopositionModalTitle = createSelector(
    getGeopositionModal,
    (geopositionModal) => geopositionModal.title
);
export const getGeopositionModalAccess = createSelector(
    getGeopositionModal,
    (geopositionModal) => geopositionModal.access
);

export const getGeopositionModalCurrentGeo = createSelector(
    getGeopositionModal,
    (getGeopositionModal) => getGeopositionModal.currentGeoposition
);
export const getActiveGeoposition = createSelector(
    getGeopositionModal,
    (getGeopositionModal) => getGeopositionModal.activeGeoposition
);