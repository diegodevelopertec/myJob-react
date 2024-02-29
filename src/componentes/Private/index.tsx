
import React, { ReactNode } from 'react';
import { Route, useNavigate} from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

type props={
    children:ReactNode
}
export default ({children}:props)=>{
    const {user}=useAuthContext()
    const navigate=useNavigate()
    if(!user){
        navigate("/")
    }else{
        return children
    }
}
