import axios  from "axios"
import { baseURL } from "../services/axios.config"



export const apiJobs={
    getAllJobs:async()=>{
        try{
            const response=await axios.get(`${baseURL}jobs`)
            if(response.data){
                return response.data
            }
            if (!response.data) {
                throw new Error('Erro na solicitação');
              }
        }catch(e){
            console.log(e)
        }
    },
    getJobId:async(id:number)=>{
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