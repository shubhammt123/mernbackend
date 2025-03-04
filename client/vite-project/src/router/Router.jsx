import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';

const Router = createBrowserRouter([
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/signup",
        element : <Signup /> 
    },
    {
        element : <PrivateRoute />,
        children : [
            {
                path : "/dashboard",
                element : <Dashboard />
            }
        ]
    }

    
])

export default Router