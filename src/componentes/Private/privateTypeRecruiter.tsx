import { ReactNode, useEffect } from "react"
import { useAuthContext } from "../../context/authContext"
import { useLocation, useNavigate } from "react-router-dom"

type Props={
    children:ReactNode
}
export  const PrivateRecruiter=({children}:Props)=>{
    const {pathname}=useLocation()
    const {user}=useAuthContext()
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(user?.type=== 'candidato'){
            navigate('/vagas')
        }
    },[])
    
    if(user?.type=== 'recrutador'){
        return children
    }
}