import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Mainlayout from "../layout/Mainlayout";
import TodoLayout from "../layout/TodoLayout";


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
        element:<div>Login</div>
    },
    {
        path: "/register",
        element:<div>Register</div>
    },
    {
        path:'/tms/:id',
        element:<TodoLayout/>
    }
])

export default Route;