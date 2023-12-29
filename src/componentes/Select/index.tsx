import { HTMLAttributes, useState } from "react"
import { Box } from "./style"

export interface ISelect extends HTMLAttributes<HTMLSelectElement>{
m?:string,
p?:string,
w?:string
h?:string,
data:any[],

}




export default ({data,...rest}:ISelect)=>{
    const [options,setOptions]=useState([])
  

    return <Box  data={options} {...rest} >
       {data.map((i,k)=>(
        <option key={k} value={i}>{i}</option>
       ))}
    </Box>
}