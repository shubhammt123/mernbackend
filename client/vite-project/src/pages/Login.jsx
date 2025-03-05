import React, { useContext, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [formData , setFromData] = useState({});
  const navigate = useNavigate();
  const {auth , setAuth , setRole } = useContext(AuthContext);

  console.log(auth)

  const handleChange = (e)=>{
    setFromData({...formData , [e.target.name] : e.target.value});
  }

  // / , /product , /cart -- can be visible to anyone
  // /checkout , /orderSucessful , /myorder , /wishlist - can be accessed by customer only
  // /dashboard , /admin-product , /admin-order  , /admin-user - can be accessed  by admin only
  // /profile - can be accessed by both admin and customer
  // /login , /singup - these routes can be accessed only when no one is logged-in

  const handleSubmit = async (e)=>{
    console.log("Hello Grras")
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/users/login",formData);
      console.log(response)
      localStorage.setItem("token",response.data.token);
      let decodeToken = jwtDecode(response.data.token);
      setRole(decodeToken.role);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-2/5 h-4/5 bg-white flex flex-col justify-center items-center gap-8 shadow-xl rounded'>
        <h1 className='text-3xl font-semibold'>Welcome Back!<span className='ml-2 text-red-800'>Login</span> </h1>
        <form onSubmit={handleSubmit} className='w-full h-1/2 flex flex-col justify-evenly items-center'>
        <div className='w-3/5'>
          <input placeholder='Email' className='outline-none border-gray-300 border p-2 placeholder:text-grey-300 shadow-inner w-full rounded shadow focus:border-red-800' onChange={handleChange} name='email' />
        </div>
        <div className='w-3/5'>
          <input type="password" placeholder='Password' className='outline-none border-gray-300 border p-2 placeholder:text-grey-300 shadow-inner w-full rounded shadow focus:border-red-800' onChange={handleChange} name='password' />
        </div>
        <div className='w-3/5'>
          <button className='w-full cursor-pointer bg-red-800 text-white p-2 font-semibold rounded shadow active:bg-red-900'>Login</button>
          <p className='text-center mt-2 text-sm text-gray-500'>Don't have an account? <span className='text-red-800 cursor-pointer'>Signup</span></p>
        </div>
        </form>
      </div>
      </div>
  )
}

export default Login