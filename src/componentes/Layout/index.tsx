import { ReactNode } from "react"
import { Container } from "./style"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { Modal } from "../Modal"


type PropsApp={
  children:ReactNode
}

export const Layout=({children}:PropsApp)=>{
    return <Container>
       <Header />
       <main>
        {children}
       </main>
       <Modal>
         <div>abriu o modal</div>
       </Modal>
       <Footer />
    </Container>
}