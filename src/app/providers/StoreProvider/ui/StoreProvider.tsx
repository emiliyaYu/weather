import {FC, ReactNode} from "react";
import { Provider } from "react-redux";
import {createReduxStore} from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface StoreProvider {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider:FC<StoreProvider> = ({children, initialState}) => {
    const store = createReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}