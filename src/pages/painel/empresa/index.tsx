import { Link } from "react-router-dom"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { useAuthContext } from "../../../context/authContext"


export const EmpresaPainel=()=>{
    const {user}=useAuthContext()

    return <Painel >
        <ContentPage titlePage="empresa do painel">
            <div>
              <p>Olá {user?.name}! Você ainda não configurou sua empresa.<Link to={'/painel/recrutador/configure_empresa'}>Clique aqui</Link></p>  
            </div>
        </ContentPage>
    </Painel>
}