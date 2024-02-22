import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { IJob } from "../../interfaces/job"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { apiJobs } from "../../actions/jobs.action"
import { toast } from "react-toastify"
import { useUserContext } from "../../context/authcontext"
import { Page, SectionDetailsJobs } from "./style"
import { Layout } from "../../componentes/Layout"
import './../../../public/assets/company-logo.png'
import Arrowright from "../../assets/svgs/arrowright"
import { baseURL } from "../../services/axios.config"



export const VagaId=()=>{
    const [jobId,setJobId]=useState<IJob | null>(null)
    const params=useParams()
    const {user}=useUserContext()
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
        document.title='MyJobs/Vaga'
      },[])
    
    const ClickCandidateToJob=()=>{
        if(user){
            toast.success('candidatura feita!')
            navigate(`/candidato/candidaturas`)
        }else{
            toast.error('Ops!você não tem uma conta 😢 ')
        }
    }

    return <Layout>
        <ContentPage titlePage={``}>
        <Page>
                {/*userApplicationJob && <p>
                     Você se candidatou em {userApplicationJob.dateapplied} ✅
                     </p>
        */}

        <div className="header-page">
          <h3>{jobId?.title} <span>{jobId?.category?.name}</span></h3>
        </div>

           {<SectionDetailsJobs>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Descrição</div>
                        <div className="card-body">
                            <p>{jobId?.description?.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Requisitos</div>
                        <div className="card-body">
                            <p>{jobId?.requirements?.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                        </div>
                    </div>
                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Salário</div>
                        <div className="card-body">
                            <p>{jobId?.salary  ? `R$ ${jobId.salary.toString().replace('.',',')}` : 'Salário não especificado'}</p>
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

                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Sobre a Empresa</div>
                        <div className="card-body-company">
                            <div className="cx-img">
                            {jobId?.company && 
                              <img src={`${baseURL}public/images/${jobId.company.logo}`} alt="Logo da Empresa" />
                             }
                            </div>
                            <div className="data">
                           {
                            jobId?.company !== undefined && <>
                               <h3>{jobId?.company &&  jobId?.company.name}</h3>
                               <p>{jobId?.company.about}</p>
                            </>
                           }

                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button onClick={ClickCandidateToJob}>candidatar</button> 
                        {/* userApplicationJob &&  <button >desistir</button> */}
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
    
    </ContentPage>
    </Layout>
}