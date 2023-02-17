import { FC } from "react";
import { Outlet } from "react-router-dom";
import 'appStyles/index.scss'
const AppLayout: FC = () => {
    return (
        <div className={`app`}>
            <Outlet />
        </div>
    )
}
export default AppLayout;