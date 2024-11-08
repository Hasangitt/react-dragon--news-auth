import { useContext } from "react";
import { AuthContext } from "../Auth/CreactContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const loaction = useLocation()
    console.log(loaction.pathname)

    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    
    if(user){
        return children 
    }
    return <Navigate state={loaction.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;

PrivateRouter.propTypes = {
    children: PropTypes.node
}