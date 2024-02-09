import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin",
        element: <App />,
        children: routesGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App />,
        children: routesGenerator(facultyPaths)
    },
    {
        path: "/student",
        element: <App />,
        children: routesGenerator(studentPaths)
    },

]);