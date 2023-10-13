import { ReactNode, createContext, useContext, useState } from "react"


type props={
    children:ReactNode
}
type ContextType={
    stateMobile:boolean,
    handleStateMobile:(newState:boolean)=>void
}


const context=createContext<ContextType>({
    stateMobile:false,
    handleStateMobile:()=>{}
})

export const ContextProvider=({children}:props)=>{
    const [stateMobile,handleStateMobile]=useState<boolean>(false)


const values={
    stateMobile,handleStateMobile
}
    return <context.Provider value={values}>
        {children}
    </context.Provider>
}

export const useGlobalContext=()=>useContext(context)