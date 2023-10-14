import axios  from "axios"
import { baseURL } from "../services/axios.config"



export const apiJobs={
    getAllJobs:async()=>{
        try{
            const response=await axios.get(`${baseURL}jobs`)
            return response.data
        }catch(e){
            return e
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
}