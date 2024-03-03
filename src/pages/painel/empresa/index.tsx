import { Link } from "react-router-dom"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { useAuthContext } from "../../../context/authContext"
import { useEffect, useState } from "react"
import { CompanyInterface } from "../../../interfaces/company"
import apiCompany from "../../../actions/apiCompany"
import { baseURL } from "../../../services/axios.config"
import { PageCompany } from "./style"



export const EmpresaPainel=()=>{
    const {user}=useAuthContext()
    const [company,setCompany]=useState<CompanyInterface | null>(null)


    useEffect(()=>{
    
           const getCompanyfromUser=async()=>{
               if(user){
                   const data=await apiCompany.getCompanyFromUser(user.id as number)
                   setCompany(data as CompanyInterface)
               }
           }
           getCompanyfromUser()
      
   },[])
    



    return <Painel >
        <ContentPage titlePage="">
          {!company &&   <div>
              <p>Olá {user?.name}! Você ainda não configurou sua empresa.<Link to={'/painel/recrutador/configure_empresa'}>Clique aqui</Link></p>  
            </div>
        }
          {
            company && <PageCompany>
                  <div className="header-page">
                        {company.logo !== null &&  <img src={`${baseURL}public/images/${company.logo}`} alt="" />}
                        {company.logo === null &&   <img src="/assets/company-logo.png" />}
                    <h3>{company.name}</h3>

                   </div>
                   <div className="data">
                        <span>{company.instagram}</span>
                        <span>{company.email}</span>
                        <span>{company.linkedin}</span>
                        <span>{company.tel}</span>
                        <span>{company.city}-{company.state}</span>
                   </div>
                   <section>
                     <h3>Sobre</h3>
                     <p>{company.about}</p>
                   </section>
                   <section>
                     <h3>Vagas da Empresa</h3>
                   </section>
              
            </PageCompany>
          }
        </ContentPage>
    </Painel>
}