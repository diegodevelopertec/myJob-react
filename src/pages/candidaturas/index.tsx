import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { IApplication } from "../../interfaces/application"
import {apiApplication } from "../../actions/applications.action"
import { CardApplication } from "../../componentes/CardApplication"
import { Page } from "./style"
import { useAuthContext } from "../../context/authContext"


export const Candidaturas=()=>{
  const [application,setApplications]=useState<IApplication[] | []>([])
  const {user}=useAuthContext()

    useEffect(()=>{
        document.title='MyJobs/Candidaturas'
      },[])

    useEffect(()=>{
      const getApplications=async()=>{
        if(user !== null){
          const dataList:IApplication[] | []=await apiApplication.getApplications(user.id as number)
          console.log(dataList)
          setApplications(dataList)
        }
      }
  
    getApplications()
   
})
      
    return <Layout>
      <ContentPage titlePage="Minhas Candidaturas">
      <Page>
        {application.length > 0  ? application.map((a,k)=>(
          <CardApplication application={a} key={k} />
        )) : <div>
             <p>🫤 Você ainda não se candidatou á nenhuma vaga</p>
          </div>} 
      </Page>
    </ContentPage>
    </Layout> 
}