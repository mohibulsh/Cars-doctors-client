import React, { createContext, useState } from 'react';
import {getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.confiq';
export const AuthContext =createContext()
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [user,serUser]=useState(null)
    //create the user
   
    const authInfo ={
        user,
        createUsers

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;