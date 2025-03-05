import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';

const Dashboard = () => {
    const navigate = useNavigate();
    const {auth ,setAuth , role , setRole} = useContext(AuthContext);
    const handleLogout = ()=>{
        localStorage.clear();
        // localStorage.setItem("auth",false);
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