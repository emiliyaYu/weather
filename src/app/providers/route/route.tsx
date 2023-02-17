import { Suspense } from "react";
import { RoutePath } from "shared/config";
import { AppLayout } from "app/ui/index";
import { MainPage } from "pages/MainPage";

export const route = [
    {
        element: <Suspense fallback={<div>Loader...</div>}><AppLayout /></Suspense>,
        children: [
            {
                path: RoutePath.main,
                element: <Suspense fallback={<div>Loader...</div>}><MainPage/></Suspense>
            }
        ]
    }
];