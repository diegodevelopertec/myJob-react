
import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { ContainerJobs } from "./style"
import { JobType } from "../../types/job"
import { apiJobs } from "../../actions/jobs.action"
import { CardJob } from "../../componentes/CardJob"
import SkeletonComponent from "../../componentes/Skeleton"
import { useUserContext } from "../../context/authcontext"



export const Vagas=()=>{
   const [jobs,setJobs]=useState<JobType[] | []>([])
   const {user}=useUserContext()


   useEffect(()=>{
    const getJobs=async()=>{
        const jobsList=await apiJobs.getAllJobs()
        setJobs(jobsList as JobType[])
        console.log(jobsList);
        
    }
     setTimeout(()=>{
        getJobs()
     },200)
   },[])

    return <ContentPage titlePage="Vagas">
       
        <ContainerJobs>
            <p>{user?.name} Acompanhe as vagas abertas</p>
            <div className="cx-jobs">
                {jobs.length !== 0  ? jobs.map((i,k)=><CardJob key={k} job={i} />) 
                         : 
                 <SkeletonComponent /> 
                }
              
            </div>
        </ContainerJobs>
    </ContentPage>
}