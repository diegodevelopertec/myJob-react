
import { CompanyInterface } from "./company";
import { ICurriculum } from "./curriculum";


export interface IUser{
    id:number,
    name:string,
    lastname:string,
    email:string,
    password:string,
    type:string,
    tel:string,
    photo:string,
    company:CompanyInterface,
    curriculum:ICurriculum
}