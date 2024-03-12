import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { ICurriculum } from "../interfaces/curriculum"
import { apiCurriculum } from "../actions/apiCurriculum"
import { CompanyInterface } from "../interfaces/company"
import apiCompany from "../actions/apiCompany"


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
    tel:string,
    company?:CompanyInterface
}
type SigInType={
    user:User,
    token:string,
    status:boolean
}

type ContextType={
    user:User | null,
    curriculumContext:ICurriculum | null,
    setCurriculumContext:(curriculum:ICurriculum | null)=>void,
    SigIn:(user:User,token:string)=>void,
    SigUp:(user:TUser,token:string)=>void,
    SigOut:()=>void
}


const contextAuth=createContext<ContextType>({} as ContextType)

export const AuthProvider=({children}:props)=>{
    const [user,setUser]=useState<User | null>(null)
    const [curriculumContext,setCurriculumContext]=useState<ICurriculum | null>(null)
    const [company,setCompany]=useState<CompanyInterface | null>(null)
    
useEffect(()=>{
    const storageUser=localStorage.getItem('@u')
    const storageCurriculum=localStorage.getItem('@curri')
    if(storageUser || storageCurriculum){
        const storageUserParsed=JSON.parse(storageUser as string)
        setUser(storageUserParsed)

        const storageCurriculumParsed=JSON.parse(storageCurriculum as string)
        setCurriculumContext(storageCurriculumParsed)
    }

 
},[])

useEffect(()=>{
    const getCurriculumUser=async()=>{
      if(user !== null){
            const curriculumId=await apiCurriculum.getCurriculumFromUser(user.id as number)
           if(typeof curriculumId !== 'string'){
            setCurriculumContext(curriculumId)
            console.log(curriculumId)
           }else{
           
            setCurriculumContext(null)
            console.log(curriculumId)
           }
        }
       
      }

  setInterval(
    getCurriculumUser,1200
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
     setCurriculumContext(null)
    localStorage.clear()
}



const values={
    user,SigIn,SigOut,SigUp,curriculumContext,setCurriculumContext,company
}
    return <contextAuth.Provider value={values}>
        {children}
    </contextAuth.Provider>
}

export const useAuthContext=()=>useContext(contextAuth)