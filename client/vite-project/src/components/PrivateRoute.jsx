import React, { useContext, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const PrivateRoute = ({allowedRole}) => {
  console.log(allowedRole)
    const {auth , setAuth , role , setRole} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!auth){
             navigate("/login");
        }

        if(!allowedRole.includes(role)){
          navigate("/");
        }
    },[]);

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivateRoute