import { IExperience } from "./experience";
import { ISkills } from "./skills";
import { ITrainnings } from "./trainnings";
import { IUser } from "./user";

export interface  ICurriculum {
    id:number,
    iduser: number,
    name: string,
    office: string;
    email:string,
    lastname:string,
    tel:string,
    city:string,
    state:string,
    dateNasc:string,
    pcd:number,
    deficiency: string | null,
    about:string,
    linkedin:string,
    github:string,
    user:IUser,
    trainnings:ITrainnings[],
    experiences:IExperience[],
    skills:ISkills[]








}