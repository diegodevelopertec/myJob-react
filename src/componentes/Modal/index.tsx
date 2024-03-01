import { HTMLAttributes, ReactNode, } from "react"
import { Container } from "./style"
import { useGlobalContext } from "../../context/globalContext"
import { Button } from "../Button"

type Props={
    children:ReactNode
}

export interface ModalInterface extends HTMLAttributes<HTMLDivElement> {
    stateModal:boolean

}
export const Modal=({children}:Props)=>{
    const {stateModal,handleStateModal}=useGlobalContext()

    return <Container stateModal={stateModal}>
        <div className="modal-content">
           {children}
         </div>
        
    </Container>
}