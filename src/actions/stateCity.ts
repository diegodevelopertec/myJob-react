import { baseUrlGov } from './../services/axios.config';
import axios from "axios";



export interface States {
    id: number;
    nome: string;
    sigla: string;
  }

export const apiStatesCity={
    getStates:async()=>{
        try{
            const response = await axios.get<States[]>(`${baseUrlGov}estados`)
            if(response.status === 200){
                return response.data
            }else{
                return 'error'
            }


        }catch(e){
            console.log(e)
        }
    },
    getCityFromState:async(stateid:number)=>{
        try{
        const response = await axios.get<string[]>(`${baseUrlGov}estados/${stateid}/municipios?orderBy=nome`)
        if(response.status === 200){
            return response.data
        }else{
            return 'error'
        }
        }catch(e){
            console.log(e)
        }
    },
    getCitys:async()=>{
        try{
            const response = await axios.get<{id:number,nome:string}[]>(`${baseUrlGov}municipios?orderBy=nome`)
            if(response.status === 200){
                return response.data
            }else{
                return 'error'
            }
            }catch(e){
                console.log(e)
            }
        }
}