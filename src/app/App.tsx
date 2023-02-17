import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { route } from "app/providers";

const App: FC = () => <RouterProvider router={createBrowserRouter(route)}/>
export default App;