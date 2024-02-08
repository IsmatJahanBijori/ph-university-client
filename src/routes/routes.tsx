import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import Login from "../pages/Login";
import { adminRoutes } from "./admin.routes";

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
        children: adminRoutes
    }

]);