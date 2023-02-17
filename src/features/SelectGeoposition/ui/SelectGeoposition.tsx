import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { geopositionModalActions, getGeopositionModalCurrentGeo } from "widgets/GeopositionModal";
import { getSelectGeopositionModalData, selectGeopositionModalActions } from "widgets/SelectGeopositionModal"
import { AddGeopositionForm, addGeopositionFormActions} from "widgets/AddGeopositionForm";
import { CurrentGeopositionForm } from "widgets/CurrentGeopositionForm";
import { GeopositionList } from "widgets/GeopositionList";

import styles from './SelectGeoposition.module.scss';

export const SelectGeoposition: FC = () => {

    const dispatch = useDispatch();
    const currentGeoposition = useSelector(getGeopositionModalCurrentGeo);
    const geopositionsData = useSelector(getSelectGeopositionModalData);
    const onAddForm = () => {
        dispatch(addGeopositionFormActions.setIsAdding(true))
    };
   const setIsActiveCurrentGeoposition = () => {
        const newGeopositionData = geopositionsData.map((geo) => {
            if(geo.isActive) {
                geo = {...geo, isActive: false}
            }
            return geo;
        })
       dispatch(selectGeopositionModalActions.setGeopositionData(newGeopositionData));
       dispatch(geopositionModalActions.setCurrentGeoposition({...currentGeoposition, isActive: true}));
   };

    return (
        <div>
            <div className={styles.geopositionContainer}>
                <CurrentGeopositionForm setIsActiveCurrentGeoposition={setIsActiveCurrentGeoposition}/>
                <div>
                    <h1>Saved geolocations:</h1>
                   <GeopositionList geopositionsData={geopositionsData}/>
                    <Button type='primary' onClick={onAddForm}>+</Button>
                </div>
            </div>
            <AddGeopositionForm geopositionsData={geopositionsData}/>
        </div>
    )
}