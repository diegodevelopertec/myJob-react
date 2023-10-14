import { InputHTMLAttributes } from "react";
import {ContainerInput } from "./style";


export interface InputInterface extends InputHTMLAttributes<HTMLInputElement>{
    p?:string,
    w?:string,
    h?:string,
    m?:string,
    bx?:string,
    bdRadius?:string | number,
    bg?:string 
    fsize?:number	
}


export const Input=({...rest}:InputInterface)=>{
    return <ContainerInput {...rest} ></ContainerInput>
}