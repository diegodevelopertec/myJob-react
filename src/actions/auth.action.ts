
import axios from "axios";
import { baseURL } from "../services/axios.config";
import useLocalStorage from "../hooks/useLocalStorage";
import { IUser } from "../interfaces/user";



type PromiseAuth={
    user:IUser,
    token:string,
    status:boolean
}

export const apiAuth={
   
        signIn:async(data:{email:string,password:string,type:'candidato' | 'recrutador' | string})=>{
         if(data){
            try{
            let response=await axios.post(`${baseURL}auth/sigin`,data)
            if(response.data){
                useLocalStorage.setValue('token',response.data.token)
                useLocalStorage.setValue('user',response.data.user)
                return response.data
            }
              response.data
            }catch(e){
             return e
            }
        }
 
     },
     signUp:async(data:{name:string,lastname:string,password:string,tel:string,email:string,type:string})=>{
         if(data){
             try{
                const response=await axios.post(`${baseURL}auth/register`,data)
                useLocalStorage.setValue('token',response.data.token)
                useLocalStorage.setValue('user',response.data.user)
                return response.data
             }catch(e){
              return e
             }
         }
        }

}