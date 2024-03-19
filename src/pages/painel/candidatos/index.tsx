import { useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Painel } from "../../../componentes/Painel"
import { ICurriculum } from "../../../interfaces/curriculum"
import { apiCurriculum } from "../../../actions/apiCurriculum"
import { CardCandidates } from "../../../componentes/CardCandidates"
import { ContainerProfessional } from "./style"
import Loading from "../../../componentes/Loading"
import { GlobalStyle } from "../../../globalStyle"
import { useGlobalContext } from "../../../context/globalContext"
import { ErrorCompany } from "../../../componentes/ErrorCompany"


export const CandidatosPainel=()=>{
    const [listCandidates,setListCandidates]=useState<ICurriculum[] | null>(null)
    const [loadingProfessionals,setLodingProfessionals]=useState<boolean>(true)
    const {handleStateModal}=useGlobalContext()

useEffect(()=>{
        const companyStorage=localStorage.getItem('@companyid')
        if(companyStorage !== 'undefined'){
          handleStateModal(false)
        }else{
          handleStateModal(false)
        }
},[])
    
useEffect(()=>{
    const getCurriculunsAll=async()=>{
        const data=await apiCurriculum.getCurriculumAll()
        setListCandidates(data)
        setLodingProfessionals(false)
    }
  
 
    setInterval(getCurriculunsAll,2000)
   
},[])


    return <Painel >
        <ContentPage titlePage="Profissionais">
         {loadingProfessionals && <Loading text="Aguarde,carregando suas profissionais..." type="bubbles" color={`${GlobalStyle.bgTheme}`}/>}
        {
            !loadingProfessionals && <ContainerProfessional>
            {
              listCandidates !== null && listCandidates?.map((c,k)=>(
                  <CardCandidates curriculum={c} key={k} />
              ))
            } 
          </ContainerProfessional>
        }
        </ContentPage>
        <ErrorCompany />
    </Painel>
  
}