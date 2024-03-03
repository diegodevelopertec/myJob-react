import { useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { Page } from "./style"
import { IJob } from "../../../interfaces/job"
import { apiJobs } from "../../../actions/jobs.action"
import { Table } from "./style"
import Lixeira from "../../../assets/svgs/lixeira"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import Swal from "sweetalert"
import { toast } from "react-toastify"
import Loading from "../../../componentes/Loading"
import { GlobalStyle } from "../../../globalStyle"

export const VagasPostadasPainel=()=>{
    const [jobsFromCompany,setJobsFromCompany]=useState<IJob[] | null>(null)
    const [loadingJobs,setLodingJobs]=useState<boolean>(true)


    useEffect(()=>{
        const companyStorage=localStorage.getItem('@companyid')
        const parsedCompanyStorage=JSON.parse(companyStorage as string) 
        const getJobs=async()=>{
            const jobsList=await apiJobs.getAllJobsFromCompany(parsedCompanyStorage)
            setJobsFromCompany(jobsList as IJob[])
            setLodingJobs(false)
        }
       
         setInterval(getJobs,5600)
       },[])
       


const deleteJob=(id:number)=>{
    Swal({
        title: 'Tem certeza?',
        text: 'Se deletar essa vaga todas as candidaturas serão deletadas automaticamente',
        icon: 'info',
        buttons:
            {
                cancel: {
                  text: "Cancel",
                  value:false,
                  visible: true,
                  className: "",
                  closeModal: true,
                },
                confirm: {
                  text: "OK",
                  value: true,
                  visible: true,
                  className: "",
                  closeModal: true
                }
              }
        ,
      }).then((result) => {
        if (result) {
           const deleteJobId=async()=>{
               await apiJobs.deleteJobId(id)
           }
           deleteJobId()
          toast.success('Vaga deletada')
        } else {
            console.log(result)
        }
      })
}



    return <Painel >
        <ContentPage titlePage="Vagas Postadas">
            <Page>
               <p>Acompanhe aqui todas as vagas da sua Empresa </p> 
                {loadingJobs && <Loading text="Aguarde,carregando suas vagas..." type="bubbles" color={`${GlobalStyle.bgTheme}`}/>}
                {
                   (!loadingJobs && jobsFromCompany !== null) && <Table>
                        <thead>
                            <tr>
                            <td>Titulo</td>
                            <td>criada em</td>
                            <td>expira</td>
                            <td>candidaturas</td>
                            <td>categoria</td>
                            <td >acoes</td>
                            </tr>
                        </thead>
                        <tbody>
                        {jobsFromCompany.map((j,k)=>(
                           <tr>
                             <td>{j.title}</td>
                            <td>{j.createDate}</td>
                            <td>{j.expireDate == null ? j.expireDate : 'não expecificado'}</td>
                            <td>{j.applications.length}</td>
                            <td>{j.category.name}</td>
                            <td className="actions">
                                <Link to={`/painel/recrutador/vagaspostadas/${j.id}`} className="btn">detalhes</Link>
                                <span   data-tooltip-content={'deletar vaga'} onClick={()=>deleteJob(j.id)}
                                    data-tooltip-place="bottom-end" data-tooltip-id="my-tooltip" 
                                ><Lixeira /></span>
                            </td>
                           </tr>
                        ))}
                        </tbody>



                    </Table>
                   
                }
                
            </Page>
        </ContentPage>
        <Tooltip id="my-tooltip"  />
    </Painel>
}