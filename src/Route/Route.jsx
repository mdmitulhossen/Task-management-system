import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Mainlayout from "../layout/Mainlayout";
import TodoLayout from "../layout/TodoLayout";
import Login from "../pages/authpage/Login";
import Register from "../pages/authpage/Register";
import ProtectedRoute from "./ProtectedRoute";


const Route = createBrowserRouter([
    {
        path: "/",
        element:<Mainlayout/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/about",
                element:<div>About</div>
            },
            {
                path: "/feature",
                element:<div>Feature</div>
            },
        ]

    },
    {
        path: "/login",
        element:<Login/>
    },
    {
        path: "/register",
        element:<Register/>
    },
    {
        path:'/tms',
        element:<ProtectedRoute><TodoLayout/></ProtectedRoute>
    }
])

export default Route;