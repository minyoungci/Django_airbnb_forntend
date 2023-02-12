import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./routers/NotFound"
import Home from "./routers/Home"


const router = createBrowserRouter([
{
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
        {
            path:"",
            element: <Home />,
        },
    ]
},
])

export default router;