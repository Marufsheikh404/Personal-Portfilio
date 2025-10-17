import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Page/HomePage";
import About from "../Page/About";
import Contact from "../Page/Contact";


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
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router