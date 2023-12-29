
import { ReactNode, useEffect, useState } from "react"
import { Box } from "./style"
import FilterIcon from "../../assets/svgs/filter"
import gsap from "gsap"


type props={
    children:ReactNode,
    w?:string,
    h?:string,
    p?:string,
   
    
    
}

export default ({children}:props)=>{
    const [activeDataFilter,setActiveDataFilter]=useState(false)
 



    useEffect(()=>{
        gsap.fromTo('.box-data',
        {opacity:0},{opacity:1,duration:2})
    },[])
    return <Box activeData={activeDataFilter}>
         <p>Filtrar </p>
         <span onClick={()=>!activeDataFilter  ? setActiveDataFilter(true) : setActiveDataFilter(false)}>
          <FilterIcon  />
         </span>
        
        <div className="box-data">
           {children}
        </div>
    </Box>
}