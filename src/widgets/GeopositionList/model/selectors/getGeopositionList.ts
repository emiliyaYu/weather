import { StateSchema } from "app/providers";
import { createSelector } from "@reduxjs/toolkit";

export const getGeopositionList = (state: StateSchema) => state.geopositionList;

export const getGeopositionListIsEdit = createSelector(
    getGeopositionList,
    (list) => list.isEditList
);
export const getGeopositionListEditId = createSelector(
    getGeopositionList,
    (list) => list.editId
);

export const getGeopositionListTitle = createSelector(
    getGeopositionList,
    (list) => list.title
);