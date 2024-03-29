import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const navigate=useNavigate();
    const location= useLocation();

    if(!user){
        return <Navigate to={'/login'} state={{from: location}} replace />
    }
    return children;
};

export default RequireAuth;