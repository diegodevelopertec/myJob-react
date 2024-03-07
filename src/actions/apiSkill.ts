import axios from "axios"
import { baseURL } from "../services/axios.config"


export default {
    deleteSkillId:async(id:number)=>{
        try{
            const response=await axios.delete(`${baseURL}skills/${id}`)
            if(response.status === 200){
                console.log(true)
            }else{
                console.log(false)
            }
        }catch(e){
            console.log(e)
        }
    }
}