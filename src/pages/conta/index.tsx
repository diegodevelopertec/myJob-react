import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { BoxCurriculum, NotCurriculum, PDFPage, Page } from "./style"
import { useAuthContext } from "../../context/authContext"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import  Swal from 'sweetalert'
import { toast } from "react-toastify"
import { apiCurriculum } from "../../actions/apiCurriculum"
import { ICurriculum } from "../../interfaces/curriculum"
import generatePDF, {  Margin,Options } from 'react-to-pdf'
import { useGlobalContext } from "../../context/globalContext"
import { Modal } from "../../componentes/Modal"
import { baseURL } from "../../services/axios.config"

export const Conta=()=>{
    const [targetRef,setTargetRef]=useState(null)
    const getTargetElement =()=>document.getElementById('content-id') 
    const {user,SigOut,setCurriculumContext}=useAuthContext()
    const [curriculum,setCurriculum]=useState<ICurriculum | null>(null)
    const [hasCurriculum,setHasCurriculum]=useState(false)
    const navigate=useNavigate()
    const {handleStateModal}=useGlobalContext()

    const stylePDF:Options = {
        method:'save',
        filename:`${curriculum !== null ? `${curriculum.user?.name}${curriculum.user?.lastname}-curriculo.pdf`: 'curriculo.pdf'}`,
        page: {
          
           margin: Margin.MEDIUM,
           format: 'A4',
           orientation: 'portrait',
        }
    
    }
    const GeneratePDF=()=>{ 
        const box=document.getElementById('content-id')  as HTMLDivElement
        box.style.display='flex'
        generatePDF(getTargetElement,stylePDF)
        box.style.display='none'
      }
      

    useEffect(()=>{
        const getCurriculumUser=async()=>{
          if(user !== null){
                const curriculumId=await apiCurriculum.getCurriculumFromUser(user.id as number)
               if(typeof curriculumId !== 'string'){
                setCurriculum(curriculumId)
                setHasCurriculum(true)
               setCurriculumContext(curriculumId)
               
               }else{
                setHasCurriculum(false)
                setCurriculumContext(null)
          
               }
            }
           
          }
        
    setInterval(getCurriculumUser,1000)
    },[])


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
                        <img src={`${baseURL}public/images/${user?.photo}`}  alt="" />
                       </div>
                       <h3>{user?.name} {user?.lastname}</h3>
                        <div className="data">
                            <p>{user?.email}</p>
                            <p>{user?.tel}</p>
                            <p>{user?.password}</p>
                        </div>
                        <div className="cx-btn">
                            <button onClick={()=>handleStateModal(true)}>Editar</button>
                        </div>
                </div>
            </div>
            <button onClick={SigOutUser}>Sair da  conta</button>
         </div>
         <div className="right">
            {(!hasCurriculum && !curriculum ) && <NotCurriculum>
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
                (hasCurriculum && curriculum ) && <BoxCurriculum>
                    <div className="top">
                        <span onClick={()=>GeneratePDF()}>Baixar PDF</span>
                        <span>Editar</span>
                    </div>
                    {curriculum !== null ? <PDFPage ref={targetRef} id="content-id">
                               <div className="dataprofile">
                                <div className="top">
                                    <h2>
                                      <div className="name">{curriculum.user?.name} {curriculum.user?.lastname}</div>
                                      <div className="office">{curriculum.tel}</div>
                                    </h2>  
                                    <div className="ctts">
                                      <span><strong>Email</strong>:{curriculum.user?.email}</span>
                                      <span><strong>Telefone </strong>:{curriculum.user?.tel}</span>
                                      <span><strong>Linkedin</strong>:{curriculum?.linkedin}</span>
                                      <span><strong>Github</strong>:{curriculum?.github}</span>
                                    </div>
                                  </div>
                               </div>
                                <section>
                                  <div className= "section about">
                                    <h3>Sobre Mim</h3>
                                    {curriculum?.about}
                                  </div>
                                  <div className= "section skills">
                                    <h3>Habilidades</h3>
                                    <ul>
                                   {curriculum.skills?.map((s,k)=><li key={k}>{s.name}</li>)}
                                    </ul>
                                  </div>
                                  <div className= "section cursos">
                                    <h3>Cursos</h3>
                                    <ul>
                                      {curriculum?.trainnings?.map((t,k)=>(
                                         <div className="curso" key={k}>
                                          <div className="title">{t?.name}-{t?.school}</div>
                                          <span>{t.start?.split('/').reverse().join('/')} - {t.end?.split('/').reverse().join('/')}</span>
                                         </div>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className= "section experiencia">
                                    <h3>Experiência Profissional</h3>
                                    <ul>
                                      {curriculum.experiences?.map((xp,k)=>(
                                         <div className="curso">
                                          <div className="title">{xp?.office}-{xp?.companyname}</div>
                                          <p>{xp.about}</p>
                                          <span>{xp.start?.split('/').reverse().join('/')} - {xp.end?.split('/').reverse().join('/')}</span>
                                         </div>
                                      ))}
                                    </ul>
                                  </div>
                                </section>
                           </PDFPage> : null
                        }
                    <div className="header">
                        <h2>{curriculum?.name} {curriculum?.lastname}</h2>
                        <div className="info">
                            <span>Email:{curriculum?.email}</span>
                            <span>Telefone(celular):{curriculum?.tel}</span>
                            <span>{curriculum?.city} - {curriculum?.state}</span>
                            
                        </div>
                    </div>
                    <section>
                        <h4>Sobre Mim</h4>
                        <p>{curriculum?.about}</p>
                    </section>
                    <section>
                        <h4>Habilidades</h4>
                        <ul className="data">
                          {curriculum?.skills && curriculum?.skills?.map((s,k)=> <li key={k}>- {s.name}</li>)}
                        </ul>
                    </section>
                    <section>
                        <h4>Formação</h4>
                       {
                        curriculum !== null && curriculum.trainnings ?
                        <div className="data">
                            {
                                curriculum.trainnings.map((t,k)=>(
                                    <div className="card" key={k}>
                                    <p className="title">{t.name}</p>
                                    <p>{t.school}</p>
                                    <p>{t.start} - {t.end !== null && t.end}</p>
                                </div>
                                ))
                            }
                        </div>

                        : <div>Nenhuma formação</div>
                       }
                        
                    </section>
                    <section>
                        <h4>Experiência Profissional</h4>
                        {
                        curriculum !== null && curriculum.experiences ?
                        <div className="data">
                            {
                                curriculum.experiences.map((e,k)=>(
                                    <div className="card" key={k}>
                                    <p className="title">{e.office}</p>
                                    <p>{e.companyname}</p>
                                    <p>{e.start}  -  {e.end !== null && e.end}</p>
                                </div>
                                ))
                            }
                        </div>

                        : <div>Nenhuma formação</div>
                       }
                    </section>
                </BoxCurriculum>
            }
         </div>
         
        </Page>
     </ContentPage>
    </Layout>
}