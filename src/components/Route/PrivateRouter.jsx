/* eslint-disable react/prop-types */


import { useContext } from "react";
import { AuthContext } from "../pages/providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PriveateRouter = ({ children }) => {
  const { user,loading } = useContext(AuthContext);

  const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PriveateRouter;
