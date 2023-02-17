import { StateSchema } from "app/providers";
import { createSelector } from "@reduxjs/toolkit";

export const getCurrentGeopositionForm = (state: StateSchema) => state.currentGeopositionForm;

export const getCurrentGeopositionFormIsEdit = createSelector(
    getCurrentGeopositionForm,
    (form) => form.isEditTitle
);

export const getCurrentGeopositionFormTitle = createSelector(
    getCurrentGeopositionForm,
    (form) => form.title
);