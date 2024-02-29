import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { useAuthContext } from "../../../context/authContext"
import { Page } from "./style"


export const ContaPainel=()=>{
    const {user}=useAuthContext()
    return <Painel >
        <ContentPage titlePage="Conta">
            <Page>
                <p>Gerencie seus dados por aqui </p>
                <div className="data">
                    <div className="content-data" >
                        <p><strong>Nome</strong>:{user?.name} {user?.lastname}</p>
                        <p><strong>Email</strong>:{user?.email}</p>
                        <p><strong>Telefone</strong>:{user?.tel}</p>
                        <p><strong>Sua senha</strong>:{user?.password}</p>
                        <p><strong>Tipo de Usuário</strong> :{user?.type}</p>
                        <div className="bx-btn">
                            <button>editar</button>
                        </div>
                    </div>
                </div>
            </Page>
        </ContentPage>
    </Painel>
}