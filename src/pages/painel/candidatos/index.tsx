import { useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { ICurriculum } from "../../../interfaces/curriculum"
import { apiCurriculum } from "../../../actions/apiCurriculum"
import { CardCandidates } from "../../../componentes/CardCandidates"
import { ContainerProfessional } from "./style"


export const CandidatosPainel=()=>{
    const [listCandidates,setListCandidates]=useState<ICurriculum[] | null>(null)

useEffect(()=>{
    const getCurriculunsAll=async()=>{
        const data=await apiCurriculum.getCurriculumAll()
       setListCandidates(data)
    }
  
 setInterval(() => {
    getCurriculunsAll
   },1000)
},[])


    return <Painel >
        <ContentPage titlePage="Candidatos">
            <ContainerProfessional>
              {
                listCandidates !== null && listCandidates?.map((c,k)=>(
                    <CardCandidates curriculum={c} key={k} />
                ))
              }
                
            </ContainerProfessional>
        </ContentPage>
    </Painel>
  
}