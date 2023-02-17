import { FC } from "react";
import { Button } from "antd";
import { Title } from "shared/ui";
import { SelectGeoposition } from "features/SelectGeoposition";
import { GeopositionModal } from "widgets/GeopositionModal";
import { AccessDeniedModal } from "widgets/AccessDeniedModal";
import { SelectGeopositionModal } from "widgets/SelectGeopositionModal";
import { Weather } from "features/Weather";

import styles from './MainPageView.module.scss';

interface MainPageViewProps {
    isGeolocationAvailable: boolean;
    isGeolocationEnabled: boolean;
    selectGeoposition: () => void;
}
export const MainPageView: FC<MainPageViewProps> = ({selectGeoposition, isGeolocationEnabled, isGeolocationAvailable}) => {
    return (
        <>
            <Title text='Weather'/>
            <div className={styles.content}>
                <Button type='primary' onClick={selectGeoposition} className={styles.changeLocBtn}>Change geolocation</Button>
                <Weather />
            </div>
            <GeopositionModal
                isGeolocationAvailable={isGeolocationAvailable}
                isGeolocationEnabled={isGeolocationEnabled}/>
            <AccessDeniedModal />
            <SelectGeopositionModal>
                <SelectGeoposition></SelectGeoposition>
            </SelectGeopositionModal>
        </>

    )
}