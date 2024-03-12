import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { IJob } from "../../interfaces/job"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { apiJobs } from "../../actions/jobs.action"
import { toast } from "react-toastify"
import { Page, SectionDetailsJobs } from "./style"
import { Layout } from "../../componentes/Layout"
import './../../../public/assets/company-logo.png'
import Arrowright from "../../assets/svgs/arrowright"
import { baseURL } from "../../services/axios.config"
import { useAuthContext } from "../../context/authContext"
import { apiApplication } from "../../actions/applications.action"
import { IApplication } from "../../interfaces/application"
import Deficiency from "../../assets/svgs/deficiency"
import Skeleton from "react-loading-skeleton"
import Loading from "../../componentes/Loading"
import { GlobalStyle } from "../../globalStyle"
import { Link } from "react-router-dom"


export const VagaId=()=>{
    const {user,curriculumContext}=useAuthContext()
    const [loadingJob,setLoadingJob]=useState(true)
    const [hasApplication,setHasApplication]=useState<true | false>(false)
    const [application,setApplication]=useState<IApplication | null>(null)
    const [jobId,setJobId]=useState<IJob | null>(null)
    const params=useParams()
    const location=useLocation()
    const navigate=useNavigate()
    const articleUrl = `https://${location.pathname}`;
    const {id}=params

    useEffect(()=>{
        const verifyApplicationByIdJob=async()=>{
            if(user !== null && jobId){
              const list=await apiApplication.getApplications(user.id as number) as IApplication[]
              const verify=list.some(i=>i.idjob === jobId.id && i.iduser === (user.id as number))
              const applicationUser=list.find(i=>i.idjob === jobId.id && i.iduser === (user.id as number))
             setHasApplication(verify)
             setApplication(applicationUser as IApplication)
          
            }
            
      }
     setTimeout(verifyApplicationByIdJob, 50);
    })

    useEffect(()=>{
        const getJobById=async()=>{
            const job=await apiJobs.getJobId(parseInt(id as string))
            setJobId(job)
            setLoadingJob(false)      
        }
      
     setTimeout( getJobById,1000)
    },[])



    useEffect(()=>{
        document.title='MyJobs/Vaga'
      },[])

      

    const ClickCandidateToJob=async()=>{
        const d=new Date()
        if(curriculumContext === null){
            toast.error('Ops!você ainda não criou o seu curriculo 😢 ')
        }else if(user !== null && jobId !== null){
            await apiApplication.addApplication(user?.id as number ,jobId.id,d.toLocaleDateString())
            toast.success('candidatura feita!')
            navigate(`/candidaturas`)
        }else if(!user){
            toast.error('Ops!você não tem uma conta 😢 ')
        }else if(!curriculumContext){
           
        }
    }

    return <Layout>
        <ContentPage titlePage={``}>
        {loadingJob && <Loading text="Aguarde,carregando detalhes da vaga.." type="bubbles" color={`${GlobalStyle.bgTheme}`} />}
        {!loadingJob &&  <Page>
        <div className="header-page">
          <h3>{jobId?.title} <span>{jobId?.category.name}</span></h3>
          { <div className="pcd-line">
           {jobId?.exclusivepcd  && <div className="cx"><Deficiency />{jobId?.exclusivepcd ? 'Vaga exclusiva para PCD' : null}</div>}
           <div>{hasApplication && <p>✅ Você  já se candidatou á essa vaga em {application?.date} </p> }</div>
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

                    <div className="card-detail">
                        <div className="card-title"><Arrowright />Sobre a Empresa</div>
                        <div className="card-body-company">
                            <div className="cx-img">
                             {jobId?.company &&  <img src={`${baseURL}public/images/${jobId.company.logo}`} alt="Logo da Empresa" />}
                            </div>
                            <div className="data">
                           {
                            jobId?.company !== undefined && <>
                                <div>
                                <h3>{jobId.company &&  jobId?.company.name}</h3>
                                <p>{jobId.company.about}</p>
                                </div>
                               
                            </>
                           }

                            </div>
                        </div>
                        <div className="cx-link">
                                <Link to={`/${jobId?.company.name.toLowerCase()}/${jobId?.company.id}/vagas`}>ver mais vagas da empresa</Link>
                        </div>
                    </div>
                    <div className="actions">
                       {!hasApplication && <button onClick={ClickCandidateToJob}>candidatar</button>} 
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
        }
        
    </ContentPage>
    </Layout>
}