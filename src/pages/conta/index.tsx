import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { BoxCurriculum, NotCurriculum, Page } from "./style"
import { useAuthContext } from "../../context/authContext"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import  Swal from 'sweetalert'
import { toast } from "react-toastify"


export const Conta=()=>{
    const {user,SigOut}=useAuthContext()
    const [hasCurriculum,setHasCurriculum]=useState(false)
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
    return <Layout>
     <ContentPage titlePage="Meus Dados">
        <Page>
         <div className="left">
             <div className="profile">
               <div className="content">
                       <div className="cx-img">
                        <img src="" alt="" />
                       </div>
                       <h3>{user?.name} {user?.lastname}</h3>
                        <div className="data">
                            <p>{user?.email}</p>
                            <p>{user?.tel}</p>
                            <p>{user?.password}</p>
                        </div>
                        <div className="cx-btn">
                            <button>Editar</button>
                        </div>
                </div>
            </div>
            <button onClick={SigOutUser}>Sair da  conta</button>
         </div>
         <div className="right">
            {!hasCurriculum && <NotCurriculum>
               <div className="box">
                   <div className="text">
                        <h3>Olá {user?.name}</h3>
                        <p>Para se candidatar á vagas crie o seu curriculo</p>
                        <Link to={'/criar_curriculo'}>clique Aqui</Link>
                    </div>
               </div>
            </NotCurriculum>
            }
            {
                hasCurriculum && <BoxCurriculum>
                    <div className="top">
                        <span>Baixar PDF</span>
                        <span>Editar</span>
                    </div>
                    <div className="header">
                        <h2>{user?.name} {user?.lastname}</h2>
                        <div className="info">
                            <span>Email:{user?.email}</span>
                            <span>Telefone(celular):{user?.tel}</span>
                            <span>São Paulo - SP</span>
                            
                        </div>
                    </div>
                    <section>
                        <h4>Sobre Mim</h4>
                        <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
                        literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney Colle
                        ge in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through t
                        he cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.3
                        3 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theo
                        ry of ethics, very popular during the Renaissance
                        . The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section  Lorem Ipsum used since the 1500s is
                        </p>
                    </section>
                    <section>
                        <h4>Habilidades</h4>
                        <ul className="data">
                            <li>Pacote Office</li>
                            <li>Pacote Office</li>
                            <li>Pacote Office</li>
                            <li>Pacote Office</li>
                        </ul>
                    </section>
                    <section>
                        <h4>Formação</h4>
                        <div className="data">
                            <div className="card">
                               <p className="title">Curso de Amalise de Sistemas</p>
                                <p>Escola Estadual Walmir Almeida Costa</p>
                                <p>inicio: 02/02/2022  conclusão :45/12/2024</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h4>Experiência Profissional</h4>
                        <div className="data">
                            <div className="card">
                               <p className="title">Polidor</p>
                                <p>Marmoraria Pedramar</p>
                                <p>inicio: 02/02/2022  conclusão :45/12/2024</p>
                            </div>
                        </div>
                    </section>
                </BoxCurriculum>
            }
         </div>
        </Page>
     </ContentPage>
    </Layout>
}