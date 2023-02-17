import { DropdownButton } from "shared/ui";
import { Button } from "antd";
import { FC, ReactNode } from "react";

interface GeopositionButtonProps {
    onClickTitle?: (id: string) => () => void;
    setIsActive?: (id: string) => () => void;
    id: string;
    isActive: boolean;
    children: ReactNode;
    className?: string;
    deleteGeo: (id: string) => () => void;
}
export const GeopositionButton: FC<GeopositionButtonProps> = ({isActive, children, id, onClickTitle, setIsActive, className, deleteGeo}) => {
    return (
        <DropdownButton items={[
            {
                label: (
                    <Button onClick={onClickTitle(id)}>Edit name</Button>

                ),
                key: '1'
            },
            {
                label: (
                    <Button disabled={isActive} onClick={setIsActive(id)}>Select</Button>

                ),
                key: '2'
            },
            {
                label: (
                    <Button onClick={deleteGeo(id)}>Delete</Button>

                ),
                key: '3'
            }
        ]}className={className}>{children}</DropdownButton>
    )
}