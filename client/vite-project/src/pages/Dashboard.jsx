import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';

const Dashboard = () => {
    const navigate = useNavigate();
    const {auth ,setAuth , role , setRole} = useContext(AuthContext);
    const handleLogout = ()=>{
        localStorage.removeItem("role");
        localStorage.setItem("auth",0);
        setRole(null);
        setAuth(false);
        navigate("/login")
    }
    console.log(typeof auth)
  return (
    <div>Dashboard
        <button className='cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard