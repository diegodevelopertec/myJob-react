import { useEffect, useState } from "react"
import { CardJobCompany, Page } from "./style"
import { Link } from "react-router-dom"
import { Painel } from "../../../componentes/Painel"
import { CompanyInterface } from "../../../interfaces/company"
import apiCompany from "../../../actions/apiCompany"
import { baseURL } from "../../../services/axios.config"
import { IJob } from "../../../interfaces/job"
import { useAuthContext } from "../../../context/authContext"

export const EmpresaPainel=()=>{
    const [companyId,setCompanyId]=useState<CompanyInterface | null>(null)
    const {user}=useAuthContext()

    useEffect(()=>{
       const getCompany=async()=>{
          if(user){
            const response=await apiCompany.getCompanyFromUser(user.id as number) as CompanyInterface
            if(response.name){
              setCompanyId(response)
            }else{
              setCompanyId(null)
            }
           }
        }
      getCompany()
    },[])


    
    return <Painel p="0">
      <Page>
        {
          companyId ?  <>
          <div className="header-page">
          <div className="logo-name">
              <img src={`${baseURL}public/images/${companyId?.logo}`} alt="" />
              <h2>{companyId?.name}</h2>
          </div>
          <Link to={``} >Editar</Link>
        </div>
        <main className="content">
            <section>
                <h3>Sobre Nós</h3>
                <p>{companyId?.about}</p>
            </section>
            <section>
                <section className="vagas">
                   <h3>Vagas</h3>
                    <p>Se candidate á nossas vagas e faça parte da nossa Equipe</p>
                    <div className="cards-vagas">
                    {companyId?.jobs && companyId?.jobs.map((j:IJob,k)=><CardJobCompany>
                        <div className="job-details">
                          <h4>{j.title}</h4>
                          <p>publicada em {j.createDate}</p>
                        </div>
                         <Link to={`/painel/recrutador/vagaspostadas/${j.id}`} >ver detalhes</Link>
                    
                    </CardJobCompany>)}
                    </div>
                </section>
            </section>
          </main>
          
          
          </> : <div>erro</div>
        }
       
        
       </Page>
    </Painel>
   
}