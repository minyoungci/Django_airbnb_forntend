import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routers/Home";
import Users from "./routers/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default router;