import { HTMLAttributes, ReactNode } from "react"
import { Container } from "./style"
//import { useGlobalContext } from "@/context/globalcontext"


export interface DivInterface extends HTMLAttributes<HTMLDivElement>{
children:ReactNode
bg?:string,
m?:string,
p?:string,

} 


export const Box=({children}:DivInterface)=>{
   // const {globalTheme}=useGlobalContext() bg={globalTheme === 'light' ? '#e0e0e0f8' : '#2b2929'}



    return <Container bg={'#e0e0e0f8' }>{children}</Container>
}