
export  type JobType={
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
    tipoContrato:string,
    companyModel:{
        id: number;
        idcreator:number,
        name: string;
        logo: string;
        description: string;
        cnpj: string;
        about: string,
        email: string,
        tel: string,
        city: string,
        instagram?:string,
        site?:string,
        linkedin?:string,
        state:string,
    }
}