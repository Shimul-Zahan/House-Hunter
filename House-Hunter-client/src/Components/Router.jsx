import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Home } from "./Home";
import MainLayout from "../Layout/Main/MainLayout";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddHouse from "./Dashboard/AddHouse";
import ManageHouse from "./Dashboard/ManageHouse";
import LogIn from "./Login2";
import Registration from "./Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Registration />
            },
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
                path: '/dashboard/manage-house',
                element: <ManageHouse />
            }
        ]
    }
])

export default router