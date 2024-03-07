import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Page, SectionDetailsJobs } from "./style"
import { Layout } from "../../componentes/Layout"
import './../../../public/assets/company-logo.png'
import Arrowright from "../../assets/svgs/arrowright"
import { baseURL } from "../../services/axios.config"
import { IApplication } from "../../interfaces/application"
import { apiApplication } from "../../actions/applications.action"
import { useAuthContext } from "../../context/authContext"
import Loading from "../../componentes/Loading"
import { GlobalStyle } from "../../globalStyle"



export const CandidaturaId=()=>{
    const [applicationId,setApplicationId]=useState<IApplication | null>(null)
    const [loadingApplicationId,setLoadingApplicationId]=useState(true)
    const params=useParams()
    const {user}=useAuthContext()
    const location=useLocation()
    const navigate=useNavigate()
    const articleUrl = `https://${location.pathname}`;
    const {id}=params

    
    useEffect(()=>{
        const getJobById=async()=>{
            const application=await apiApplication.getApplicationId(parseInt(id as string))
              if(application !== null){
                setApplicationId(application)
                setLoadingApplicationId(false)
            }  
              console.log(application)     
        }
       setTimeout( getJobById,1000)
    },[])


    useEffect(()=>{
        document.title='MyJobs/Vaga'
    },[])

    
    const ClickCandidateToJob=async()=>{
        if(user && applicationId ){
            await apiApplication.deleteApplicationId(applicationId.id as number)
            toast.success('Desistência feita!')
            navigate('/candidaturas')
        }else{
            toast.error('Ops!você não tem uma conta 😢 ')
        }
    }

    return <Layout>
        <ContentPage titlePage={``}>
     {loadingApplicationId  && <Loading text="Carregando detalhes da candidatura..." type="bubbles" color={`${GlobalStyle.bgTheme}`} />}
     {!loadingApplicationId && applicationId !== null && <Page>
        <div className="header-page">
        <h3>{applicationId?.job.title} <span>{applicationId?.job.category.name}</span></h3>
        </div>

   {<SectionDetailsJobs>
            <div className="data-application">
              ✅ Candidatou em {applicationId.date}
            </div>
            <div className="card-detail">
                <div className="card-title"><Arrowright />Descrição</div>
                <div className="card-body">
                    <p>{applicationId.job.description?.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                </div>
            </div>
            <div className="card-detail">
                <div className="card-title"><Arrowright />Requisitos</div>
                <div className="card-body">
                    <p>{applicationId.job.requirements.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                </div>
            </div>
            <div className="card-detail">
                <div className="card-title"><Arrowright />Salário</div>
                <div className="card-body">
                    <p>{applicationId.job.salary  ? `R$ ${applicationId.job.salary.toString().replace('.',',')}` : 'Salário não especificado'}</p>
                </div>
            </div>
            <div className="card-detail">
                <div className="card-title"><Arrowright />Beneficios</div>
                <div className="card-body">
                    <p>{applicationId.job.benefits.split(',').map((i,k)=><li key={k}>{i}</li>)}</p>
                </div>
            </div>
            <div className="card-detail">
                <div className="card-title"><Arrowright />Localização/Atuação</div>
                <div className="card-body">
                    <p >{applicationId.job.location}</p>
                </div>
            </div>
            <div className="card-detail">
                <div className="card-title"><Arrowright />Tipo de contrato</div>
                <div className="card-body">
                    <p className="card-contrato">{applicationId.job.contractType}</p>
                </div>
            </div>

            <div className="card-detail">
                <div className="card-title"><Arrowright />Sobre a Empresa</div>
                <div className="card-body-company">
                    <div className="cx-img">
                    {applicationId.job.company && 
                      <img src={`${baseURL}public/images/${applicationId.job.company.logo}`} alt="Logo da Empresa" />
                     }
                    </div>
                    <div className="data">
                   {
                   applicationId?.job?.company !== undefined && <>
                       <h3>{applicationId.job.company &&  applicationId.job.company.name}</h3>
                       <p>{applicationId.job.company.about}</p>
                    </>
                   }

                    </div>
                </div>
            </div>
            <div className="actions">
                <button onClick={ClickCandidateToJob}>desistir de vaga</button> 
          
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