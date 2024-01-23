import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Home } from "./Home";
import MainLayout from "../Layout/Main/MainLayout";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddHouse from "./Dashboard/AddHouse";

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
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/add-house',
                element: <AddHouse />
            },
            {
                path: '/dashboard',
                element: <h1>Hello World</h1>
            }
        ]
    }
])

export default router