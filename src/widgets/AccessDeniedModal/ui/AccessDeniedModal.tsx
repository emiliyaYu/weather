import { FC, useEffect } from "react";
import { Modal } from "shared/ui";
import { useDispatch, useSelector } from "react-redux";
import {
    accessDeniedModalActions,
    getAccessDeniedModalErrorText,
    getAccessDeniedModalIsOpen,
    getAccessDeniedModalTitle
} from "widgets/AccessDeniedModal";
import { getGeopositionModalAccess } from "widgets/GeopositionModal";
import { GeopositionAccess, LOCAL_STORAGE_GEOPOSITION_ACCESS_KEY } from "shared/config";

export const AccessDeniedModal: FC = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector(getAccessDeniedModalIsOpen);
    const errorText = useSelector(getAccessDeniedModalErrorText);
    const title = useSelector(getAccessDeniedModalTitle);
    const geolocationAccessLS = localStorage.getItem(LOCAL_STORAGE_GEOPOSITION_ACCESS_KEY);
    const hasNotGeolocationAccess = useSelector(getGeopositionModalAccess) === GeopositionAccess.NO;

    useEffect(() => {
        if ((hasNotGeolocationAccess && geolocationAccessLS !== null) || geolocationAccessLS === GeopositionAccess.NO) {
            dispatch(accessDeniedModalActions.setOpen(true));
        } else {
            dispatch(accessDeniedModalActions.setOpen(false));
        }
    }, [geolocationAccessLS, hasNotGeolocationAccess]);

    return (
        <Modal open={isOpen} title={title} footer={null} closable={false}>{errorText}</Modal>
    )
}
