import { FC } from "react";
import { Typography } from "antd";


interface TitleProps {
    text: string;
    level?: 2 | 3 | 4 | 5;
}
export const Title: FC<TitleProps> = ({text, level}) => {
    const { Title: AntdTitle } = Typography;

    return <AntdTitle level={level} style={{color: 'white'}}>{text}</AntdTitle>
}