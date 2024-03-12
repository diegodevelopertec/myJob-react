import { HTMLAttributes, ReactNode, } from "react"
import { Container } from "./style"
import { useGlobalContext } from "../../context/globalContext"
import { Button } from "../Button"
import Close from "../../assets/svgs/close"

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
            <div className="header-modal">
              <span onClick={()=>handleStateModal(false)}> <Close /></span>
            </div>
           {children}
         </div>
        
    </Container>
}