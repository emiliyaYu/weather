import { FC, ReactNode } from "react";
import { Dropdown, MenuProps, ButtonProps } from "antd";

interface DropdownButtonProps extends ButtonProps {
    items: MenuProps['items'];
    children: ReactNode,
    className?: string
}
export const DropdownButton: FC<DropdownButtonProps> = ({items, children, className}) => {
    return (
        <Dropdown.Button menu={{items}} className={className}>{children}</Dropdown.Button>
    )
}