import axios from "axios"
import { baseURL } from "../services/axios.config"
import { ICurriculum } from "../interfaces/curriculum"


export const apiCurriculum={
    getCurriculumAll:async():Promise<ICurriculum[] | any>=>{
        try{
            const  response=await axios.get(`${baseURL}curriculuns`) 
            if(response.status === 200){
                return response.data
            }
        }catch(e){
            console.log(e)
        }
    },
    getCurriculumFromUser:async(idsuser:number):Promise<ICurriculum | any>=>{
        try{
            const  response=await axios.get(`${baseURL}users/${idsuser}/curriculuns`) 
            if(response.status === 200){
                return response.data
            }
        }catch(e){
            console.log(e)
        }
    },
    getCurriculumId:async(id:number):Promise<ICurriculum | any>=>{
        try{
            const  response=await axios.get(`${baseURL}curriculuns/${id}`) 
            if(response.status === 200){
                return response.data
            }

        }catch(e){
            console.log(e)
        }

    },
    updateCurriculum:async()=>{





    },
    deleteCurriculum:async(idcurriculum:number)=>{
        try{
            const  response=await axios.get(`${baseURL}curriculuns/${idcurriculum}`) 
            if(response.status === 200){
                return response.data
            }

        }catch(e){
            console.log(e)
        }
    }






}