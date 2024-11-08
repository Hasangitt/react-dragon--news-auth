import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/news/:id",
                element: <PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>,
                loader: () => fetch('/news.json')
            }
        ]
    }
])
export default router;