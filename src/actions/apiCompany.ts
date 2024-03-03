import axios from "axios"
import { baseURL } from "../services/axios.config"
import { CompanyInterface } from "../interfaces/company"

export default {
    getCompanyFromUser:async(idcreator:number)=>{
        try{
            const response=await axios.get<CompanyInterface>(`${baseURL}users/${idcreator}/companys`)
            if(response.status === 200){
                return response.data
            }else{
                return 'algo deu errado'
            }
        }catch(e){

        }
    }
}