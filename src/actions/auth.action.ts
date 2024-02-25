import { baseURL } from "../services/axios.config";
import axios from "axios";


type UserType={
    name: string,
    lastname: string,
    email:string,
    password:string,
    tel:string,
    type:string
}

type dataSignIn={
    email:string,
    password:string,
    type:string
}

export const apiAuth={
   
        signIn:async(data:dataSignIn):Promise<any>=>{
         if(data){
            try{
              let response=await axios.post(`${baseURL}auth/sigin`,data)
              return response
            }catch(e){
             return e
            }
        }
 
 
     },
     signUp:async(user:UserType):Promise<any>=>{
         if(user){
             try{
                const response=await axios.post(`${baseURL}auth/register`,user)
                return response
             }catch(e){
              return e
             }
         }
        }

}