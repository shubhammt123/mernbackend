import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const getToken = ()=>{
        let token = localStorage.getItem("token");
        if(!token) return null;
        return token;
    }
    const [auth , setAuth] = useState(getToken() ? true : false);
    const [role , setRole] =  useState(localStorage.getItem(("role")));
  return (
    <AuthContext.Provider value={{auth , setAuth , role ,setRole}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider