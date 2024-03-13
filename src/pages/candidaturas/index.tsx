import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { IApplication } from "../../interfaces/application"
import {apiApplication } from "../../actions/applications.action"
import { CardApplication } from "../../componentes/CardApplication"
import { Page } from "./style"
import { useAuthContext } from "../../context/authContext"
import Loading from "../../componentes/Loading"
import { GlobalStyle } from "../../globalStyle"


export const Candidaturas=()=>{
  const [application,setApplications]=useState<IApplication[] | null>(null)
  const [loadingApplications,setLoadingApplications]=useState(true)
  const {user}=useAuthContext()

    useEffect(()=>{
        document.title='MyJobs/Candidaturas'
      },[])

    useEffect(()=>{
      const getApplications=async()=>{
        if(user !== null){
          const dataList:IApplication[] | []=await apiApplication.getApplications(user.id as number)
          setApplications(dataList)
          setLoadingApplications(false)
        }
      }
  
  setTimeout(getApplications,1300)
})
      
    return <Layout>
      <ContentPage titlePage="Minhas Candidaturas">
      <Page>
      {loadingApplications  && <Loading text="Carregando suas candidaturas..." type="bubbles" color={`${GlobalStyle.bgTheme}`} />}
       {(!loadingApplications && application)  &&  application.map((a,k)=>(
          <CardApplication application={a} key={k} />
        )) 
      } 
      {
        !loadingApplications && application?.length == 0 && <div>
          <p>🫤 Você ainda não se candidatou á nenhuma vaga</p>
         </div>
      }

      </Page>
    </ContentPage>
    </Layout> 
}