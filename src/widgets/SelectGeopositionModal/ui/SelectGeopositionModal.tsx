import {FC, ReactNode} from "react";
import {Modal} from "shared/ui";
import {useDispatch, useSelector} from "react-redux";
import {
    getSelectGeopositionModalIsOpen, selectGeopositionModalActions
} from "widgets/SelectGeopositionModal";


interface SelectGeopositionModalProps {
    children: ReactNode
}

export const SelectGeopositionModal: FC<SelectGeopositionModalProps> = ({children}) => {
    const dispatch = useDispatch();

    const isOpen = useSelector(getSelectGeopositionModalIsOpen);

    const onOk = () => {
        dispatch(selectGeopositionModalActions.setOpen(false));
    }

    const onCancel = () => {
        dispatch(selectGeopositionModalActions.setOpen(false))
    }

    return (
        <Modal open={isOpen} title={'Select Geoposition:'} width={600} onOk={onOk} onCancel={onCancel}>{children}</Modal>
    )
}