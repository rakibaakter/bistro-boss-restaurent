import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import AuthenticationLayout from "../Layout/AuthenticationLayout/AuthenticationLayout";
import SignUp from "../Pages/SignUp/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
    ],
  },
  {
    path: "/authentication",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "/authentication/login",
        element: <Login />,
      },
      {
        path: "/authentication/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
