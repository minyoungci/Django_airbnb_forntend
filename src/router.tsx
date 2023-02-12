import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Users from "./routers/Users"
import Home from "./routers/Home"


const router = createBrowserRouter([
{
    path: "/",
    element: <Root />,
    children: [
        {
            path:"",
            element: <Home />,
        },
        {
            path:"users",
            element: <Users />,
        }
    ]
},
])

export default router;