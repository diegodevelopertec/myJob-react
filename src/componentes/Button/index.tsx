import { ButtonHTMLAttributes} from "react";
import { Component } from "./style";


export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement>{
    text?:string,
    bgColor?:string,
    radius?:string,
    p?:string,
    m?:string,
    w?:string,
    h?:string,
    bgH?:string,
    colorH?:string,
    bd?:string,
    shadow?:string,
    trs?:string

}


export const Button=({text,...rest}:ButtonInterface)=>{
    return <Component  {...rest}>{text} </Component>
}