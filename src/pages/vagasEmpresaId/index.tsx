import { useEffect, useState } from "react"
import { Layout } from "../../componentes/Layout"
import { CompanyInterface } from "../../interfaces/company"
import apiCompany from "../../actions/apiCompany"
import { useParams } from "react-router-dom"
import { CardJobCompany, Page } from "./style"
import { baseURL } from "../../services/axios.config"
import { IJob } from "../../interfaces/job"
import { Button } from "../../componentes/Button"
import { Link } from "react-router-dom"

export const VagasEmpresaId=()=>{
    const [companyId,setCompanyId]=useState<CompanyInterface | null>(null)
    const {id}=useParams()

    useEffect(()=>{
       const getCompany=async()=>{
                const response=await apiCompany.getCompanyId(parseInt(id as string)) as CompanyInterface
                setCompanyId(response)
                console.log(companyId)
                console.log(id)
       }


       getCompany()
    },[])


    
    return <Layout>
       <Page>
        <div className="header-page">
          <div className="logo-name">
            <img src={`${baseURL}public/images/${companyId?.logo}`} alt="" />
            <h2>{companyId?.name}</h2>
          </div>
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
                         <Link to={`/vagas/${j.id}`} >ver detalhes</Link>
                    
                    </CardJobCompany>)}
                    </div>
                </section>
            </section>
          </main>
        
       </Page>
    </Layout>
}