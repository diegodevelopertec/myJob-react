
import axios from "axios";
import { baseURL } from "../services/axios.config";


export const apiAuth={
   
        signIn:async(email:string,password:string,type:string)=>{
         if(email && password && type){
            try{
            let response=await axios.post(`${baseURL}auth/sigin`,{email,password,type})
            if(response.data){
                 localStorage.setItem('token',response.data.token)
                 localStorage.set('user',response.data.user)
                return response.data
            }
              response.data
            }catch(e){
             return e
            }
        }
 
 
     },
     signUp:async(name:string,lastname:string,password:string,tel:string,email:string,type:string)=>{
         if(email && password && type && lastname && tel && name){
             try{
                const response=await axios.post(`${baseURL}auth/register`,{name,email,type,password,tel,lastname})
                localStorage.setItem('token',response.data.token)
                localStorage.set('user',response.data.user)
                return response.data
             }catch(e){
              return e
             }
         }
        }

}