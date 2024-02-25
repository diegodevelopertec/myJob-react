
import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { ContainerJobs } from "./style"
import { IJob } from "../../interfaces/job"
import { apiJobs } from "../../actions/jobs.action"
import { CardJob } from "../../componentes/CardJob"
import Skeleton from "../../componentes/Skeleton"
import { Layout } from "../../componentes/Layout"
import { BannerSlide } from "../../componentes/BannerSlide"
import { bannersJobs } from "../../data/banner"
import SearchInput from "../../componentes/SearchInput"
import Filter from "../../componentes/Filter"
import Select from "../../componentes/Select"
import { Button } from "../../componentes/Button"
import { useAuthContext } from "../../context/authContext"
import { IApplication } from "../../interfaces/application"




export const Vagas=()=>{
    const [jobs,setJobs]=useState<IJob[] | []>([])
    const {user}=useAuthContext()
    const [loading,setLoading]=useState(true)




   useEffect(()=>{
    const getJobs=async()=>{
        const jobsList=await apiJobs.getAllJobs()
        setLoading(false)
        setJobs(jobsList as IJob[])
        console.log(jobsList);
    }
   
     getJobs()


   },[])

    return <Layout>
        <ContentPage titlePage="">
       <BannerSlide  banners={bannersJobs}/>
       <ContainerJobs>
        <div className="cx-data-info">
            <Filter p="3px" w="390px">
                <legend>Àreas:</legend>
                <Select data={['Finanças','TI','Designer','Contabilidade']}  />
                <legend>Contrato:</legend>
                <Select data={['CLT','CNPJ']}  />
                <Button m="20px 0" radius="3px" w="100%" text="Aplicar" color="#dedede" bgColor="#3887BE" bgH="#3559E0" onClick={()=>alert('enviou')} />
            </Filter>
            <SearchInput />


        </div>
           <p>{user?.name} Acompanhe as vagas abertas</p>
           <div className="cx-jobs">
               {!loading  ? jobs?.map((i,k)=><CardJob key={k} job={i} />) 
                        : 
                <Skeleton />
               }
             
           </div>
       </ContainerJobs>
   </ContentPage>
    </Layout>
}