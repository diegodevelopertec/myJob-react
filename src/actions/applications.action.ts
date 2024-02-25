import axios from "axios"
import { baseURL } from "../services/axios.config"


export const apiApplication={
    getApplications:async(iduser:number)=>{
        try{
            let response=await  axios.get(`${baseURL}users/${iduser}/applications`)
            let applications=response.data
            return applications

        }catch(e){
            console.log(e)
        }
    },
    getApplicationId:async(id:number)=>{
        try{
            let response=await  axios.get(`${baseURL}applications/${id}`)
            let application=response.data
            return application

        }catch(e){
            console.log(e)
        }
    },
    addApplication:async(iduser:number,idjob:number,date:string):Promise<any>=>{
        try{
            const response = await axios.post(`${baseURL}applications`,{iduser,idjob,date})
            if(response.status === 403){
               return false
            }else{
                return true   
            }
   
        }catch(e){
         console.log(e)
        }
       },
       deleteApplicationId:async(id:number)=>{
        try{
            let response=await  axios.delete(`${baseURL}applications/${id}`)
            console.log(response.data)
        }catch(e){
            console.log(e)
        }
    },
}