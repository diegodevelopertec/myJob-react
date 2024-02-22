import axios from "axios"
import { baseURL } from "../services/axios.config"


export const apiApplication={
    getApplictions:async()=>{
        try{
            let response=await  axios.get(`${baseURL}applications`)
            let applications=response.data
            return applications

        }catch(e){
            console.log(e)
        }
    },
    getApplictionId:async(id:number)=>{
        try{
            let response=await  axios.get(`${baseURL}applications/${id}`)
            let application=response.data
            return application

        }catch(e){
            console.log(e)
        }
    }
}