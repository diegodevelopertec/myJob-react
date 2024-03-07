import axios from "axios"
import { baseURL } from "../services/axios.config"


export default {
    deleteTrainningId:async(id:number)=>{
        try{
            const response=await axios.delete(`${baseURL}trainnings/${id}`)
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