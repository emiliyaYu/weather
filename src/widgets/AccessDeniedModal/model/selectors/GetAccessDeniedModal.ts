import { StateSchema } from "app/providers";
import { createSelector } from "@reduxjs/toolkit";

export const getAccessDeniedModal = (state: StateSchema) => state.accessDeniedModal;

export const getAccessDeniedModalIsOpen = createSelector(
    getAccessDeniedModal,
    (accessDeniedModal) => accessDeniedModal.open
);

export const getAccessDeniedModalTitle = createSelector(
    getAccessDeniedModal,
    (accessDeniedModal) => accessDeniedModal.title
);
export const getAccessDeniedModalErrorText = createSelector(
    getAccessDeniedModal,
    (accessDeniedModal) => accessDeniedModal.errorText
);