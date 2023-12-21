import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Mainlayout from "../layout/Mainlayout";


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

    }
])

export default Route;