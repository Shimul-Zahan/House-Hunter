import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Home } from "./Home";
import MainLayout from "../Layout/Main/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router