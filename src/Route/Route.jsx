import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Page/HomePage";
import About from "../Page/About";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])

export default router