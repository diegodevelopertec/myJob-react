import { Box } from "./style"
import { Modal } from "../Modal"
import { Link } from "react-router-dom"
import Error from "../../assets/svgs/error"


export const ErrorCompany=()=>{
 return <Modal>
    <Box>
      <Error />
       <h3>Ops! Você não tem uma empresa cadastrada</h3>
       <p>Clique <Link to='/painel/recrutador/configure_empresa'>aqui</Link> para fazer o cadastro</p>
    </Box>
 </Modal>
}

