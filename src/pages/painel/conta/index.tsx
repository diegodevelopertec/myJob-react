import { useNavigate } from "react-router-dom"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { useAuthContext } from "../../../context/authContext"
import { Page } from "./style"
import  Swal from 'sweetalert'
import { toast } from "react-toastify"



export const ContaPainel=()=>{
    const {SigOut,user}=useAuthContext()
    const navigate=useNavigate()

    const SigOutUser=()=>{
        Swal({
            title:'Tem certeza?',
            text: 'Você terá que fazer login novamente?',
            icon: 'info',
            
            buttons:
                {
                    cancel: {
                      text: "Cancel",
                      value:false,
                      visible: true,
                      className: "",
                      closeModal: true,
                    },
                    confirm: {
                      text: "OK",
                      value: true,
                      visible: true,
                      className: "",
                      closeModal: true
                    }
                  }
            ,
          }).then((result) => {
            if (result) {
                SigOut()
                navigate('/')
                toast.success('você saiu da conta')
            } else {
                console.log(result)
            }
          })
    
    
}

    
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
                        <div className="cx-btn">
                            <button>editar</button>
                        </div>
                        <div className="cx-btn-close">
                            <span onClick={SigOutUser}>Sair da minha conta</span>
                        </div>
                    </div>
                </div>
            </Page>
        </ContentPage>
    </Painel>
}