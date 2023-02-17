import { ChangeEvent, FC, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Button, Input } from "antd";
import { DropdownButton } from "shared/ui";
import { getGeopositionModalCurrentGeo, geopositionModalActions } from "widgets/GeopositionModal";
import {
    currentGeopositionFormActions,
    getCurrentGeopositionFormIsEdit,
    getCurrentGeopositionFormTitle
} from "widgets/CurrentGeopositionForm";

import styles from "./CurrentGeopositionForm.module.scss";

interface CurrentGeopositionForm {
    setIsActiveCurrentGeoposition: () => void
}
export const CurrentGeopositionForm: FC<CurrentGeopositionForm> = ({ setIsActiveCurrentGeoposition }) => {
    const dispatch = useDispatch();

    const currentGeoposition = useSelector(getGeopositionModalCurrentGeo);
    const title = useSelector(getCurrentGeopositionFormTitle);
    const isEdit = useSelector(getCurrentGeopositionFormIsEdit);
    const isActiveCurrentGeo = currentGeoposition.isActive;

    const onClickTitle = () => {
        dispatch(currentGeopositionFormActions.setIsEditTitle(true));
    };
    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(currentGeopositionFormActions.setTitle(event.target.value));
    };
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(geopositionModalActions.setCurrentGeoposition({...currentGeoposition, title: title}));
        dispatch(currentGeopositionFormActions.setIsEditTitle(false));
    };

    return (
        <>
            <DropdownButton
                type={currentGeoposition.isActive ? 'primary' : "dashed"}
                className={classNames(styles.currentGeo, {[styles.hide]: isEdit}, {[styles.active]: isActiveCurrentGeo})}
                items={[
                    {
                        label: (
                            <Button onClick={onClickTitle}>Edit name</Button>

                        ),
                        key: '1'
                    },
                    {
                        label: (
                            <Button onClick={setIsActiveCurrentGeoposition} disabled={isActiveCurrentGeo}>Select</Button>

                        ),
                        key: '2'
                    }
                ]}
            >
                Your current geolocation: {currentGeoposition.title}
            </DropdownButton>
            <form action="" onSubmit={handleSubmit} className={classNames({[styles.hide]: !isEdit})}>
                <Input
                    placeholder='Your current geolocation:'
                    onChange={handleChangeTitle}
                    className={styles.currentGeo}
                />

            </form>
        </>
    )
}