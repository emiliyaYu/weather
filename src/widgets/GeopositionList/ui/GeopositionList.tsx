import { ChangeEvent, FC, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Input } from "antd";
import { GeopositionButton } from "shared/ui";
import { GeopositionData, selectGeopositionModalActions } from "widgets/SelectGeopositionModal";
import {
    geopositionListActions,
    getGeopositionListEditId,
    getGeopositionListIsEdit,
    getGeopositionListTitle
} from "widgets/GeopositionList";
import {
    getGeopositionModalCurrentGeo,
    geopositionModalActions
} from "widgets/GeopositionModal";

import styles from "./GeopositionList.module.scss";

interface GeopositionListProps {
    geopositionsData: GeopositionData[]
}
export const GeopositionList: FC<GeopositionListProps> = ({ geopositionsData}) => {
    const dispatch = useDispatch();

    const formTitle = useSelector(getGeopositionListTitle);
    const isEditTitle = useSelector(getGeopositionListIsEdit);
    const editId = useSelector(getGeopositionListEditId);
    const currentGeoposition = useSelector(getGeopositionModalCurrentGeo);
    const onClickTitle = (id: string) => () => {
       dispatch(geopositionListActions.setIsEditList(true));
       dispatch(geopositionListActions.setEditId(id));

    }
    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(geopositionListActions.setTitle(event.target.value));
    }
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const newGeopositionsData = geopositionsData.map((geo) => {
            if (geo.id === editId) {
                console.log('work')
                geo = {...geo, title: formTitle}
            }
            return geo;
        });
        dispatch(selectGeopositionModalActions.setGeopositionData(newGeopositionsData));
        dispatch(geopositionListActions.setIsEditList(false));
    }
    const setIsActive = (id: string) => () => {
        const newGeopositionData = geopositionsData.map((geo) => {
            if (geo.id === id){
                geo = {...geo, isActive: !geo.isActive}
            }
            if (geo.id !== id && geo.isActive) {
                geo = {...geo, isActive: false}
            }
            return geo;
        });
        dispatch(geopositionModalActions.setCurrentGeoposition({...currentGeoposition, isActive: false}));
        dispatch(selectGeopositionModalActions.setGeopositionData(newGeopositionData));
    };
    const deleteGeo = (id: string) => () => {
        const newGeopositionData = geopositionsData.filter((geo) => geo.id !== id);
        dispatch(selectGeopositionModalActions.setGeopositionData(newGeopositionData));

    };

    return (
        <div className={styles.list}>
            { geopositionsData.map(({id,isActive, title}) =>
                <GeopositionButton
                    key={id}
                    isActive={isActive}
                    onClickTitle={onClickTitle}
                    id={id}
                    setIsActive={setIsActive}
                    deleteGeo={deleteGeo}
                    className={classNames(styles.btn, {[styles.hide] : isEditTitle}, {[styles.active]: isActive})}
                >
                    {title.length > 3 ? title.substring(0, 3) + "..." : title}

                </GeopositionButton>)
            }
            <form action="" onSubmit={handleSubmit} className={classNames({[styles.hide]: !isEditTitle})}>
                <Input
                    placeholder='Name'
                    name='changeTitle'
                    onChange={handleChangeTitle}
                    className={styles.currentGeo}
                />
            </form>
        </div>
    )
}
