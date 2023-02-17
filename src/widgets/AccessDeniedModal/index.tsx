import { AccessDeniedModal } from './ui/AccessDeniedModal';
import { accessDeniedModalActions, accessDeniedModalReducer } from "./model/slice/AccessDenidedModalSlice";
import { AccessDeniedModalSchema } from "./model/types/AccessDeniedModalSchema";
import { getAccessDeniedModalIsOpen, getAccessDeniedModalTitle, getAccessDeniedModalErrorText } from "./model/selectors/GetAccessDeniedModal";

export {
    AccessDeniedModal,
    accessDeniedModalReducer,
    accessDeniedModalActions,
    AccessDeniedModalSchema,
    getAccessDeniedModalIsOpen,
    getAccessDeniedModalTitle,
    getAccessDeniedModalErrorText
};