import { CategoryInterface } from "./category";
import { CompanyInterface } from "./company";

export  interface IJob{
    id: number;
    title: string;
    description: string;
    salary: number;
    location: string;
    requirements: string;
    level: string;
    benefits: string;
    createDate: string;
    expireDate: string;
    companyId: number | string,
    contractType:string,
    company?:CompanyInterface,
    category?:CategoryInterface
}