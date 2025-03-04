import React, { useContext, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const PrivateRoute = () => {
    const {auth , setAuth , role} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(role);
    useEffect(()=>{
        if(!auth){
             navigate("/login");
        }
    },[]);

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivateRoute