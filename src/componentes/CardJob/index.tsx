
import { Container } from "./style"
import { useState } from "react"
import { IJob } from "../../interfaces/job"
import { useLocation, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import SalaryIcon from './../../assets/icons/salary.png'
import LocationIcon from './../../assets/icons/location.png'
import CompanyIcon from './../../assets/icons/company.png'

type Props={
  job:IJob

}
export const CardJob=({job}:Props)=>{
   const location=useLocation()
  
   

    
    return <Container>
        <div className="top">
           <div className="header">
                <h2>{job.title}</h2>
                <span>{job?.category?.name}</span>
            
           </div>
           <div className="data-job">
           {location.pathname.includes('/painel/') && <>
            {job.createDate && <p>Criada em {job.createDate}</p>}
            {job.expireDate && <p>Expira em {job.expireDate}</p>}
           </>}
           </div>
           <div className="divider"></div>

        </div>
        <div className="info">
            <div className="left">
                <span>
                    <img src={SalaryIcon} />
                    {job.salary  ? `R$ ${job.salary.toString().replace('.',',')}` : 'Salário não especificado'}
                </span>
                {!location.pathname.includes('/painel') && <span>
                    <img src={LocationIcon} />
                    {job.location}
                  </span>
                }
                  <span> 
                   <img src={CompanyIcon} />
                    {job.company && job.company.name}
                </span>

               
            </div>
            <div className="right">
                {!location.pathname.includes('painel') && 
                   <Link to={`/vagas/${job.id}`}  >detalhes</Link>
                }
                {location.pathname.includes('painel') && 
                   <Link to={{pathname:`/painel/admin/vagaspostadas/${job.id}`,}}>detalhes</Link>
                }
            </div>
        </div>
    </Container>
  
}