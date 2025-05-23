import React from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Router/firebase/firebase.config';

const AuthProvider = ({children}) => {

    // create user

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const userInfo={
        createUser,
        loginUser
        
    }
    return (
        <AuthContex value={userInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;