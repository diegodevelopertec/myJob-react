import { Children } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/authcontext"



export default ()=>{
    const {user}=useAuthContext()
    const navigate=useNavigate()

    if(!user){
        navigate('/')
    }else{
        return Children
    }
}