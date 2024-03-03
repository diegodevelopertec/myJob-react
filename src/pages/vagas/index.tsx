
import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { ContainerJobs } from "./style"
import { IJob } from "../../interfaces/job"
import { apiJobs } from "../../actions/jobs.action"
import { CardJob } from "../../componentes/CardJob"
import { Layout } from "../../componentes/Layout"
import { BannerSlide } from "../../componentes/BannerSlide"
import { bannersJobs } from "../../data/banner"
import SearchInput from "../../componentes/SearchInput"
import Filter from "../../componentes/Filter"
import Select from "../../componentes/Select"
import { Button } from "../../componentes/Button"
import { useAuthContext } from "../../context/authContext"





export const Vagas=()=>{
    const [jobs,setJobs]=useState<IJob[] | []>([])
    const {user}=useAuthContext()


useEffect(()=>{
    const getAllJobs=async()=>{
        const list=await apiJobs.getAllJobs()
        setJobs(list)
    }
   getAllJobs()

    setInterval(getAllJobs, 2000)
    
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
            {/*query.isLoading &&   <Skeleton />*/}
            {jobs !== null && jobs?.map((i,k)=><CardJob key={k} job={i} />) }
             
           </div>
       </ContainerJobs>
   </ContentPage>
    </Layout>
}