import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center">
            <span className="loading loading-bars loading-lg  "></span>
      <div>
      <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
      </div>
        </div>

    }
    if (user) return children

    return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;