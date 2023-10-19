import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../pages/Home";
import Addproduct from "../pages/Addproduct";
import Mycart from "../pages/Mycart";
import SelectedBrand from "../SelectedBrand/SelectedBrand";
import Updateproduct from "../pages/Updateproduct";
import Details from "../pages/Details";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PriveateRouter from "./PrivateRouter";
// import ErrorPage from "../pages/errorpage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://dresscharm-server.vercel.app/brands"),
      },
      {
        path: "/addproduct",
        element: (
          <PriveateRouter>
            <Addproduct></Addproduct>
          </PriveateRouter>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PriveateRouter>
            <Mycart></Mycart>
          </PriveateRouter>
        ),
      },
      {
        path: "/brandinfo/:_id",
        element: (
          <PriveateRouter>
            <SelectedBrand></SelectedBrand>
          </PriveateRouter>
        ),
        loader: () => fetch("https://dresscharm-server.vercel.app/brands"),
      },
      {
        path: "/updatepro/:id",
        element: (
          <PriveateRouter>
            <Updateproduct></Updateproduct>
          </PriveateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://dresscharm-server.vercel.app/brands/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PriveateRouter>
            <Details></Details>
          </PriveateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://dresscharm-server.vercel.app/brands/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
