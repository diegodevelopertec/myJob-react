import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { JobType } from "../../types/job"
import { useParams } from "react-router-dom"
import { apiJobs } from "../../actions/jobs.action"




export const VagaId=()=>{
    const [jobId,setJobId]=useState<JobType | null>(null)
    const params=useParams()
    const {id}=params
    useEffect(()=>{
        const getJobById=async()=>{
            const job=await apiJobs.getJobId(parseInt(id as string))
            setJobId(job)
        }
        getJobById()
    },[])
    
    return <ContentPage titlePage={`${jobId?.title}/ ${jobId?.level}`}>
    <div>

    </div>
    
    </ContentPage>
}