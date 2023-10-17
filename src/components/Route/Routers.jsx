import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../pages/Home";
import Addproduct from "../pages/Addproduct";
import Mycart from "../pages/Mycart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/addproduct",
            element:<Addproduct></Addproduct>,
        },
        {
            path:"/mycart",
            element:<Mycart></Mycart>
        }
    ]
  },
]);

export default router;
