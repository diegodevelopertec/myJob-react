import { useNavigate, useParams } from "react-router-dom"
import { Painel } from "../../../componentes/Painel"
import { ICurriculum } from "../../../interfaces/curriculum"
import { useEffect, useState } from "react"
import { apiCurriculum } from "../../../actions/apiCurriculum"
import { useAuthContext } from "../../../context/authContext"
import { ContentPage } from "../../../componentes/ContentPage"
import { HeaderPage, Page, Section } from "./style"
import CardTrainning from "../../../componentes/CardTrainning"
import CardExperience from "../../../componentes/CardExperience"
import { baseURL } from "../../../services/axios.config"
import GitIcon from "../../../assets/svgs/git"
import Whatss from "../../../assets/svgs/zap"
import LinkedinIcon from "../../../assets/svgs/linke"
import EmailIcon  from "../../../assets/svgs/email"
import Deficiency from "../../../assets/svgs/deficiency"

export const CandidatoId=()=>{
    const navigate=useNavigate()
    const [curriculumUser,setCurriculumUser]=useState<ICurriculum>()
    const {id}=useParams()


useEffect(()=>{
    const getCurriculumId=async()=>{
        const data=await apiCurriculum.getCurriculumId(parseInt(id as string))
        setCurriculumUser(data)
        console.log(data)
    }
    getCurriculumId()
})


return <Painel>
        <ContentPage titlePage="">
         <Page>
           <HeaderPage>
             <div className="top">
               <img src={`${baseURL}public/images/${curriculumUser?.user.photo}`}  alt="foto do candidato"/>
               <h3>{curriculumUser?.user?.name} {curriculumUser?.user?.lastname} </h3>
               <span>{curriculumUser?.office} </span>
                {curriculumUser?.pcd  ? <Deficiency /> : null}
             </div>
             <div className="divider"></div>
             <div className="ctts">
               <div className="ctts-itens">
                  <div className="title">
                    <p>Entre em contato comigo:</p>
                  </div>
                  <div className="links">
                     {curriculumUser?.github !== null && <a  href={`${curriculumUser?.github}`} target="_black"> <GitIcon /></a>}
                     {curriculumUser?.linkedin !== null && <a href={`${curriculumUser?.linkedin}`} target="_black"> <LinkedinIcon /></a>}
                     {curriculumUser?.email !== null && <a   href={`mailto:${curriculumUser?.user?.email}`} target="_black"><EmailIcon /></a>}
                     {curriculumUser?.tel !== null && <a  href={`tel:${curriculumUser?.user?.tel}`} target="_black" ><Whatss /></a>}
                  </div>
               </div>
             </div>
           </HeaderPage>

           <Section className="about">
             <h3 className="title-section">Sobre Mim</h3>
             <p>{curriculumUser?.about}</p>
           </Section>

           <Section>
         
           </Section>
           <Section>
             <h3 className="title-section">Formação</h3>
              {curriculumUser?.trainnings?.map((t)=>(
                  <CardTrainning trainning={t} key={t.id} />
                ))
              }
           </Section>
           <Section>
             <h3 className="title-section" >Experiências Profissional:</h3>
             {curriculumUser?.experiences?.map((e)=>(
                <CardExperience experience={e} key={e.id} />
              ))
             }
           </Section>

         </Page>
        </ContentPage>
    </Painel>
}