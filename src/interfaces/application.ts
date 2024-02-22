import { IJob } from "./job"
import { IUser } from "./user"


export interface IApplication{
    id:number,
    iduser:number,
    idjob:number,
    date:string,
    user:IUser,
    job:IJob

}