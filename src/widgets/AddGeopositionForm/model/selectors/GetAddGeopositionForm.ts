import { StateSchema } from "app/providers";
import { createSelector } from "@reduxjs/toolkit";

export const getAddGeopositionForm = (state: StateSchema) => state.addGeopositionForm;

export const getAddGeopositionFormIsAdding = createSelector(
    getAddGeopositionForm,
    (form) => form.isAdding
);