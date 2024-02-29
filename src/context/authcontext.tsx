import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { ICurriculum } from "../interfaces/curriculum"
import { apiCurriculum } from "../actions/apiCurriculum"


type props={
    children:ReactNode
}

type TUser={
    photo?:string | null,
    name:string,
    lastname:string,
    email:string,
    password:string,
    type:string,
    tel:string
}

type User={
    id?:number,
    photo?:string | null,
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
    SigUp:(user:TUser,token:string)=>void,
    SigOut:()=>void
}


const contextAuth=createContext<ContextType>({} as ContextType)

export const AuthProvider=({children}:props)=>{
    const [user,setUser]=useState<User | null>(null)
    const [curriculum,setCurriculum]=useState<ICurriculum | null>(null)

useEffect(()=>{
    const storageUser=localStorage.getItem('@u')
    if(storageUser){
        const storageUserParsed=JSON.parse(storageUser as string)
        setUser(storageUserParsed)
    }
},[])

useEffect(()=>{
    const getCurriculumUser=async()=>{
      if(user !== null){
        const curriculumId=await apiCurriculum.getCurriculumFromUser(user.id as number)
        setCurriculum(curriculumId)
        console.log(curriculumId)
      }
    }

  setInterval(
    getCurriculumUser,1000
  )
},[])


const SigIn=async(user:User,token:string)=>{
    localStorage.setItem('@u',JSON.stringify(user))
    localStorage.setItem('@token',JSON.stringify(token))
    setUser(user)
}

const SigUp=async(user:TUser,token:string)=>{
    localStorage.setItem('@u',JSON.stringify(user))
    localStorage.setItem('@token',JSON.stringify(token))
    setUser(user)
}
const SigOut=()=>{
     setUser(null)
     localStorage.clear()
}
const values={
    user,SigIn,SigOut,SigUp
}
    return <contextAuth.Provider value={values}>
        {children}
    </contextAuth.Provider>
}

export const useAuthContext=()=>useContext(contextAuth)