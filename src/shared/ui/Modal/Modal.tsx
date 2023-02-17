import { FC, ReactElement, ReactNode } from "react";
import { Modal as AntdModal } from "antd";

interface ModalProps {
    title: string,
    open: boolean,
    onOk?: () => void;
    onCancel?: () => void;
    footer?: ReactElement | null;
    children?: ReactNode;
    closable?: boolean;
    width?: string | number;
}
export const Modal: FC<ModalProps> = (props) => {
    const { title, open, onOk, onCancel, footer, children, closable, width } = props;

    return (
        <AntdModal
            title={title}
            centered open={open}
            footer={footer}
            onOk={onOk}
            onCancel={onCancel}
            closable={closable}
            width={width}
        >
            {children}
        </AntdModal>
    )
}