import axios  from "axios"
import { baseURL } from "../services/axios.config"
import { IJob } from "../interfaces/job"



export const apiJobs={
    getAllJobs:async():Promise<IJob[] | any>=>{
       
            try{
                let response=await  axios.get(`${baseURL}jobs`)
                let jobs=response.data
                return jobs
            }catch(e){
                console.log(e)
            }
        
    },
    getJobId:async(id:number):Promise<IJob | any>=>{
        try{
            const response=await axios.get(`${baseURL}jobs/${id}`)
            return response.data
        }catch(e){
            return e
        }
    },
    updateJobId:async()=>{
        try{
          
        }catch(e){
            return e
        }
    },
    deleteJobId:async()=>{
        try{
          
        }catch(e){
            return e
        }
    },
}