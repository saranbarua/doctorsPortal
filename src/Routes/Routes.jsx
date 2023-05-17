import { createBrowserRouter } from "react-router-dom";
import Main from "../../src/layout/Main";
import Home from "../pages/HomaPage/Home/Home";
import LogIn from "../pages/Login/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

export default router;
