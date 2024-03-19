import { useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { BoxListCandidates, Page, SectionDetailsJobs } from "./style"
import Arrowright from "../../../assets/svgs/arrowright"
import Deficiency from "../../../assets/svgs/deficiency"
import { useAuthContext } from "../../../context/authContext"
import { IJob } from "../../../interfaces/job"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { apiJobs } from "../../../actions/jobs.action"
import { Painel } from "../../../componentes/Painel"
import { baseURL } from "../../../services/axios.config"



export const VagaPainelId=()=>{
    const [onListCandidates,setOnListCandidates]=useState(false)
    const {user}=useAuthContext()
    const [jobId,setJobId]=useState<IJob | null>(null)
    const params=useParams()
    const location=useLocation()
    const navigate=useNavigate()
    const articleUrl = `https://${location.pathname}`;
    const {id}=params




    useEffect(()=>{
        const getJobById=async()=>{
            const job=await apiJobs.getJobId(parseInt(id as string))
            setJobId(job)      
        }
        getJobById()
    },[])



useEffect(()=>{
     document.title='Painel|Recurtador'
},[])
    
  

    return <Painel>
        <ContentPage titlePage={``}>
        <Page>
        
        <div className="header-page">
          <div className="title-action">
           <h3>{jobId?.title} <span>{jobId?.category.name}</span></h3>
            <div>
            <button onClick={()=>setOnListCandidates(true)} >ver candidaturas</button>
            <Link to={`/painel/recrutador/atualizarvaga/${jobId?.id}`}>Editar</Link>
            </div>
          </div>
          {jobId?.exclusivepcd  && <div className="pcd-line">
           <div className="cx">
             <Deficiency />
             {jobId?.exclusivepcd ? 'Vaga exclusiva para PCD' : null}
           </div>
          </div>}
        </div>

           {<SectionDetailsJobs>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Descrição</div>
                        <div className="card-body">
                            <p>{jobId?.description.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Requisitos</div>
                        <div className="card-body">
                            <p>{jobId?.requirements.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Salário</div>
                        <div className="card-body">
                            <p>{jobId?.salary  ? `R$ ${jobId?.salary.toString().replace('.',',')}` : 'Salário não especificado'}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Beneficios</div>
                        <div className="card-body">
                            <p>{jobId?.benefits.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Localização/Atuação</div>
                        <div className="card-body">
                            <p >{jobId?.location}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Tipo de contrato</div>
                        <div className="card-body">
                            <p className="card-contrato">{jobId?.contractType}</p>
                        </div>
                    </div>
                </SectionDetailsJobs>
            }
           
              {/*  <ShareLinks>
                    
                        <div>
                         <p>Compartilhe essa vaga com amigos : </p>
                        </div>
                        <div className="btns">
                           <FacebookShareButton
                                url={articleUrl}
                                title="compartilhar no facebook"
                                quote={'next-share is a social share buttons for your next React apps.'}
                                hashtag={'#nextshare'}
                           >
                               < FacebookIcon  size = { 52 }  round  /> 
                          </FacebookShareButton>
                          <TelegramShareButton
                            url={articleUrl}
                            title={'next-share is a social share buttons for your next React apps.'}
                          >
                            <TelegramIcon size={52} round />
                          </TelegramShareButton>
                          <LinkedinShareButton url={articleUrl}>
                            <LinkedinIcon size={52} round />
                          </LinkedinShareButton>
                          <WhatsappShareButton
                            url={articleUrl}
                            title={'next-share is a social share buttons for your next React apps.'}
                            separator=":: "
                         >
                            <WhatsappIcon  size={52} round />
                        </WhatsappShareButton>

                    
                    </div>
                </ShareLinks>
                <SectionJobsSimilar>
                    <h3>Vagas Semelhantes💻😉</h3>
                    <p>Você pode gostar também de :</p>
                    <div className="cx-slide">
                     
                            <SlideCardCarousel cards={cards} /> 
                            slide de vagas semelhantes
                            
                        }
                        </div>
                    </SectionJobsSimilar>
                 */} 
             
            </Page>
           {
            jobId  ?  <BoxListCandidates onView={onListCandidates}>
            <div className="close-box">
            <p className="title">Candidaturas  ({jobId?.applications.length})</p>
               <span onClick={()=>setOnListCandidates(false)}>x</span>
            </div>
            <section className="content">
                <div className="filters">
                    <legend>Filtre os resultados</legend>
                    <div className="filter-item">
                        <span><input type="radio" />Ensino Médio e Superior</span>
                         <span> <input type="radio" />Ensino Superior</span>
                         <span><input type="radio" />Sexo feminino</span>
                        <span><input type="radio" />Sexo Masculino</span>
                        <span><input type="radio" />Pessoa PCD</span>
                        <span><input type="radio" />Somente Nivel Júnior </span>
                        <span><input type="radio" />Somente Nivel Pleno </span>
                        <span><input type="radio" />Somente Nivel Sênior </span>
                      

                    </div>
                </div>
                 <div className="list-candidates">
                    {
                      jobId !== null &&   jobId?.applications.map((i,k)=>(
                            <div key={k}>
                         <li className="profile">
                            <div className="left">
                                <span className="data">
                                    {i.user.photo !== null && <img src={`${baseURL}public/images/${i.user.photo}`} alt="" />} 
                                    {i.user.photo === null && <img src={`/assets/user.png`}  alt="" />}
                                    {i?.user?.name} {i?.user?.lastname}
                                </span>
                               
                            </div>
                            <div className="right">
                                <Link to={`/painel/recrutador/candidatos/${i.user.curriculum.id}`}>ver curriculo</Link>
                            </div>
                        </li>
                        <div className="divider"></div>
                        </div>
                      
                      ))
                    }
                    {
                        /*


                      j.map((i,k)=>(
                        <>
                         <li className="profile">
                            <div className="left">
                                <span className="data"><img src={i.img} alt="" />{i.name}</span>
                                <span>{i.xp}</span>
                            </div>
                            <div className="right">
                                <button>ver perfil</button>
                            </div>
                        </li>
                        <div className="divider"></div>
                        </>
                      ))
                      */ }
                    
                 </div>
            </section>
        </BoxListCandidates> : null
           }
    </ContentPage>
    </Painel>
}