import { FC, ChangeEvent, SyntheticEvent } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "antd";
import {
    addGeopositionFormActions,
    getAddGeopositionForm,
    getAddGeopositionFormIsAdding
} from "widgets/AddGeopositionForm";
import {
    selectGeopositionModalActions,
    GeopositionData
} from "widgets/SelectGeopositionModal";


import styles from "./AddGeopositionModalForm.module.scss";
import {LOCAL_STORAGE_SAVED_GEOPOSITIONS} from "shared/config/geopositionConfig/geopositionConfig";

interface AddGeopositionFormProps {
    geopositionsData: GeopositionData[] | [];
}
export const AddGeopositionForm: FC<AddGeopositionFormProps> = ({ geopositionsData}) => {
    const dispatch = useDispatch();

    const isAdding = useSelector(getAddGeopositionFormIsAdding)
    const form = useSelector(getAddGeopositionForm);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectInputName = event.target.name;
        const value = event.target.value;

        if (selectInputName === 'lat') {
            if(!Number(value)) {
                return;
            }
            dispatch(addGeopositionFormActions.setAddGeopositionForm({...form, latitude: Number(value)}));
        }
        if (selectInputName === 'lon') {
            if(!Number(value)) {
                return;
            }
            dispatch(addGeopositionFormActions.setAddGeopositionForm({...form, longitude: Number(value)}));
        }
        if (selectInputName === 'addingTitle') {
            dispatch(addGeopositionFormActions.setAddGeopositionForm({...form, title: value}));
        }
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const { latitude, longitude, title } = form;
        const newGeoposition = {
            title,
            latitude: latitude,
            longitude: longitude,
            isActive: false,
            id: title + latitude
        };
        dispatch(selectGeopositionModalActions.setGeopositionData([...geopositionsData, newGeoposition]));
        dispatch(addGeopositionFormActions.setAddGeopositionForm({title: '', longitude: null, latitude: null, isAdding: false}));
    };

    return (
    <form action="" className={classNames({[styles.hide]: !isAdding})}>
        <Input placeholder='latitude' name='lat' onChange={handleChange} value={form.latitude} className={styles.formInput}/>
        <Input placeholder='longitude' name='lon' onChange={handleChange} value={form.longitude} className={styles.formInput}/>
        <Input placeholder='name' name='addingTitle' onChange={handleChange} value={form.title} className={styles.formInput}/>
        <Button type='primary' htmlType='submit' onClick={handleSubmit}>Добавить</Button>
    </form>
    )
}