import { ReactNode, createContext, useContext, useState } from "react"


type props={
    children:ReactNode
}
type ContextType={
    stateMobile:boolean,
    handleStateMobile:(newState:boolean)=>void,
    stateModal:boolean,
    handleStateModal:(newState:boolean)=>void
}


const context=createContext<ContextType>({
    stateMobile:false,
    handleStateMobile:()=>{},
    stateModal:false,
    handleStateModal:()=>{}
})

export const ContextProvider=({children}:props)=>{
    const [stateMobile,handleStateMobile]=useState<boolean>(false)
    const [stateModal,handleStateModal]=useState<boolean>(false)


const values={
    stateMobile,handleStateMobile,stateModal,handleStateModal
}
    return <context.Provider value={values}>
        {children}
    </context.Provider>
}

export const useGlobalContext=()=>useContext(context)