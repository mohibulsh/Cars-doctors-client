import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.confiq';
export const AuthContext =createContext()
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    //create the user
   const createUsers =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
   //login users
   const logInUsers =(email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

   }
   //log Out the user
   const logOut =()=>{
    setLoading(true)
    return signOut(auth)
   }
   //state change the users Get the currently signed-in user
   useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        return unsubscribe
    }
   },[])
    const authInfo ={
        user,
        createUsers,
        logInUsers,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;