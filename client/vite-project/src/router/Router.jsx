import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';
import OpenRoutes from '../components/OpenRoutes';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import MyOrder from '../pages/MyOrder';
import Wishlist from '../pages/Wishlist';
import OrderSuccesful from '../pages/OrderSuccesful';
import AdminProduct from '../pages/AdminProduct';
import AdminUser from '../pages/AdminUser';
import AdminOrder from '../pages/AdminOrder';
import Profile from '../pages/Profile';
import UnprotectedRoute from '../components/UnprotectedRoute';

const Router = createBrowserRouter([
    {
        element : <OpenRoutes />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/product",
                element  : <Product />
            },
            {
                path  :   "/cart",
                element : <Cart />
            }
        ]
    },
    {
        element : <PrivateRoute allowedRole = {["USER"]} />,
        children : [
            {
                path : "/checkout",
                element : <Checkout />
            },
            {
                path : "/myorder",
                element : <MyOrder />
            },
            {
                path : "/wishlist",
                element : <Wishlist />
            },
            {
                path : "/ordersuccesful",
                element : <OrderSuccesful />
            }
        ]
    },
    {
        element : <PrivateRoute allowedRole={["ADMIN"]} />,
        children : [
            {
                path : "/dashboard",
                element : <Dashboard />
            },
            {
                path : "/adminproduct",
                element : <AdminProduct />
            },
            {
                path : "/adminuser",
                element :  <AdminUser />
            },
            {
                path :   "/adminorder",
                element : <AdminOrder />
            }
        ]
    },
    {
        element : <PrivateRoute allowedRole={["ADMIN","USER"]} />,
        children : [
            {
                path : "/profile",
                element :   <Profile />
            }
        ]
    },
    {
        element : <UnprotectedRoute />,
        children : [
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/signup",
                element : <Signup /> 
            }
        ]
    }
])

export default Router