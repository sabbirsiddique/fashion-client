import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../pages/Home";
import Addproduct from "../pages/Addproduct";
import Mycart from "../pages/Mycart";
import SelectedBrand from "../SelectedBrand/SelectedBrand";
import Updateproduct from "../pages/Updateproduct";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
    children: [
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=>fetch('http://localhost:5000/brands'),
        },
        {
            path:"/addproduct",
            element:<Addproduct></Addproduct>,
        },
        {
            path:"/mycart",
            element:<Mycart></Mycart>
        },
        {
          path:"/brandinfo/:_id",
          element: <SelectedBrand></SelectedBrand>,
          loader: ()=>fetch("http://localhost:5000/brands")

        },
        {
          path:"/updatepro/:id",
          element:<Updateproduct></Updateproduct>,
          loader:({params})=>fetch(`http://localhost:5000/brands/${params.id}`),
        },
        {
          path:"/details/:id",
          element:<Details></Details>,
          loader:({params})=>fetch(`http://localhost:5000/brands/${params.id}`),
        }

    ]
  },
]);

export default router;
