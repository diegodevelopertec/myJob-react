import { ReactNode, createContext, useContext, useEffect, useState } from "react"



type props={
    children:ReactNode
}

type User={
    id?:number,
    photo?:string,
    name:string,
    lastname:string,
    email:string,
    password:string,
    type:string,
    tel:string
}
type SigInType={
    user:User,
    token:string,
    status:boolean
}
type ContextType={
    user:User | null,
    SigIn:(user:User,token:string)=>void,
    SigOut:()=>void
}


const contextAuth=createContext<ContextType>({} as ContextType)

export const AuthProvider=({children}:props)=>{
    const [user,setUser]=useState<User | null>(null)
    

useEffect(()=>{
    const storageUser=localStorage.getItem('@u')
    if(storageUser){
        const storageUserParsed=JSON.parse(storageUser as string)
        setUser(storageUserParsed)
    }
},[])

const SigIn=async(user:User,token:string)=>{
    localStorage.setItem('@u',JSON.stringify(user))
    localStorage.setItem('@token',JSON.stringify(token))
    setUser(user)
}

const SigOut=()=>{
     setUser(null)
     localStorage.clear()
}
const values={
    user,SigIn,SigOut
}
    return <contextAuth.Provider value={values}>
        {children}
    </contextAuth.Provider>
}

export const useAuthContext=()=>useContext(contextAuth)