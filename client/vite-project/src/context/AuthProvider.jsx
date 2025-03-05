import React, { createContext, useState } from 'react';
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const getToken = ()=>{
        let token = localStorage.getItem("token");
        if(!token) return null;
        return token;
    }

    const getRole = ()=>{
      let token = getToken();
      if(!token){
        return null;
      }
      let decodedToken = jwtDecode(token);
      return decodedToken.role;
    }
    const [auth , setAuth] = useState(getToken() ? true : false);
    const [role , setRole] =  useState(getRole());
  return (
    <AuthContext.Provider value={{auth , setAuth , role ,setRole}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider