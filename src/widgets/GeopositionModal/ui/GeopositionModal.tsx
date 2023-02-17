import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Button} from "antd";
import { getGeopositionModalIsOpen, getGeopositionModalTitle} from "widgets/GeopositionModal";
import { geopositionModalActions } from "widgets/GeopositionModal";
import { GeopositionAccess, LOCAL_STORAGE_GEOPOSITION_ACCESS_KEY } from "shared/config";
import { Modal } from "shared/ui";

interface GeopositionModalProps {
    isGeolocationAvailable: boolean;
    isGeolocationEnabled: boolean;
}
export const GeopositionModal: FC<GeopositionModalProps> = ({isGeolocationAvailable, isGeolocationEnabled}) => {
    const dispatch = useDispatch();
    const title = useSelector(getGeopositionModalTitle);
    const isOpen = useSelector(getGeopositionModalIsOpen);
    const hasNotGeolocationAccess = localStorage.getItem(LOCAL_STORAGE_GEOPOSITION_ACCESS_KEY) === null;
    const geolocationAccess = isGeolocationEnabled ? GeopositionAccess.YES : GeopositionAccess.NO;

    useEffect(() => {
        if (hasNotGeolocationAccess && isGeolocationAvailable) {
            dispatch(geopositionModalActions.setOpen(true));
        } else {
            dispatch(geopositionModalActions.setOpen(false));
        }

    }, [hasNotGeolocationAccess]);

    const onOk = useCallback( () => {
        localStorage.setItem(LOCAL_STORAGE_GEOPOSITION_ACCESS_KEY, geolocationAccess);
        dispatch(geopositionModalActions.setAccess(geolocationAccess))
        dispatch(geopositionModalActions.setOpen(false));

    }, []);

    return(
        <Modal
            title={title}
            open={isOpen}
            footer={<Button type='primary' onClick={onOk}>Ok</Button>}
            closable={false}
        />
    )
}