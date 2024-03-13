import {  useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Input } from "../../componentes/Input"
import { Layout } from "../../componentes/Layout"
import { TextArea } from "../../componentes/TextArea"
import { BoxNewExperienceAndTrainning, Page } from "./style"
import Close from "../../assets/svgs/close"
import { apiStatesCity } from "../../actions/stateCity"
import { useFormik } from "formik"
import { schemaValidateCurriculum } from "../../validations/curriculum.validation"
import { useAuthContext } from "../../context/authContext"
import apiSkill from "../../actions/apiSkill"
import FormSkill from "../../componentes/FormSkill"
import FormTrainning from "../../componentes/FormTrainning"
import FormExperience from "../../componentes/FormExperience"
import User from "../../assets/svgs/user"

interface State {
    id: number;
    nome: string;
    sigla: string;
}
  

export const CreateCurriculum=()=>{
    const [newTrainning,setNewTrainning]=useState<boolean>(false)
    const [newExperience,setNewExperience]=useState<boolean>(false)
    const [newSkill,setNewSkill]=useState<boolean>(false)
    const [curriculum,setCurriculum]=useState(false)
    const {curriculumContext}=useAuthContext()
    const [stateSelected,setStateSelected]=useState<string | null>(null) //estado string
    const [citySelected,setCitySelected]=useState<string | null>(null)         //estado object
    const [statesList,setStatesList]=useState<State[] | []>([])   //lista de estados
    const [cityList,setCityList]=useState<{id:number,nome:string}[] | []>([])    //lista de cidades do estado
    const [textSkill,setTextSkill]=useState('')

    
useEffect(()=>{
    const getStates=async()=>{
        const listStates=await apiStatesCity.getStates() as State[]
        setStatesList(listStates)
    }
    getStates()
},[])

useEffect(()=>{
    const getCitys=async()=>{
        const citys=await apiStatesCity.getCitys() as {id:number,nome:string}[]
        setCityList(citys)
      }
    
   
    getCitys()
},[])


useEffect(()=>{
    console.log(stateSelected,citySelected)
},[stateSelected,citySelected])


const Formik=useFormik({
    initialValues:{
        name:curriculumContext?.name ? curriculumContext.name : '' ,
        lastname:curriculumContext?.lastname,
        tel:curriculumContext?.tel,
        office:curriculumContext?.office,
        pcd:curriculumContext?.pcd,
        deficiency:curriculumContext?.deficiency,
        email:curriculumContext?.email,
        github:curriculumContext?.github,
        linkedin:curriculumContext?.linkedin,
        about:curriculumContext?.about,
        city:curriculumContext?.city,
        state:curriculumContext?.state,
        dateNasc:curriculumContext?.dateNasc,
  },
    validationSchema:schemaValidateCurriculum,
    onSubmit:(values)=>{

    }
})



const AddnewSkill=async(idcurriculum:number,name:string)=>{
    const response=await apiSkill.addSkill(idcurriculum,name)
    return null
}
const AddNewTrainning=async()=>{

}

const AddNewExperience=async()=>{

}
    return <Layout>
        <ContentPage titlePage="Criar Curriculo">
            <Page>
                <p>Preencha os campos para criar seu curriculo</p>
                <form className="form" action='' onSubmit={Formik.handleSubmit}>
                    <fieldset>
                        <legend><User />Dados Pessoais</legend>
                        <div className="cx-input">
                            <label htmlFor="">Nome</label>
                            <Input name="name" value={Formik.values.name} type="text" onChange={Formik.handleChange}/>
                            {Formik.touched.name && <p>{Formik.errors.name}</p>}
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">Sobrenome</label>
                            <Input type="text" name="lastname" value={Formik.values.lastname}  onChange={Formik.handleChange} />
                            {Formik.touched.lastname && <p>{Formik.errors.lastname}</p>}
                        </div>

                        <div className="cx-input">
                            <label htmlFor="">Email</label>
                            <Input type="email" name="email" value={Formik.values.email}  onChange={Formik.handleChange} />
                            {Formik.touched.email && <p>{Formik.errors.email}</p>}
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Telefone</label>
                          <Input type="tel"  name="trl" value={Formik.values.tel}  onChange={Formik.handleChange}/>
                          {Formik.touched.tel && <p>{Formik.errors.tel}</p>}
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">Linkedin</label>
                          <Input type="url"  name="linkedin" value={Formik.values.linkedin}  onChange={Formik.handleChange} />
                          {Formik.touched.linkedin&& <p>{Formik.errors.linkedin}</p>}
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">É da area de TI? Github</label>
                            <Input type="url" name="github" value={Formik.values.github}  onChange={Formik.handleChange} />
                            {Formik.touched.github && <p>{Formik.errors.github}</p>}
                        </div>
                        <div className="cx-state-city">
                            <div className="cx-input">
                                <label htmlFor="">Estado</label>
                                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setStateSelected(e.target.value)}>
                                    {statesList?.map((s,k)=>(
                                        <option value={s.sigla}>{s.sigla}-{s.nome}</option>
                                    ))}
                                </select>
                               
                             </div>
                             <div className="cx-input">
                                <label htmlFor="">Cidade</label>
                                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setCitySelected(e.target.value)}>
                                    {cityList?.map((c,k)=>(
                                       <option value={c.nome}>{c.nome}</option>
                                    ))}
                                </select>
                               
                             </div>
                              
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Profissão/Cargo</label>
                           <Input type="text"  name="office" value={Formik.values.office}  onChange={Formik.handleChange} />
                           {Formik.touched.office&& <p>{Formik.errors.office}</p>}
                        </div>
                        <div className="cx-radio">
                           <label htmlFor="">você é uma pessoa PCD?</label>
                           <input type="radio" name="pcd" value={Formik.values.pcd}  />Sim
                           <input type="radio" name="pcd" value={Formik.values.pcd}  />Não
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Se respondeu sim a pergunta anterior,qual a sua deficiência?</label>
                           <Input type="text" name="deficiency" value={Formik.values.deficiency} onChange={Formik.handleChange} />
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Sobre</label>
                          <TextArea h="250px" name="about" value={Formik.values.about} onChange={Formik.handleChange} placeholder="Fale um pouco sobre você,destaque suas habilidades">{Formik.values.about}</TextArea>
                          {Formik.touched.office&& <p>{Formik.errors.office}</p>}
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Data de nascimento</label>
                           <Input type="date"   name="date" value={Formik.values.dateNasc}  onChange={Formik.handleChange}/>
                           {Formik.touched.dateNasc && <p>{Formik.errors.dateNasc}</p>}
                        </div>
                        <div className="cx-btn">
                            <Input type="submit" bg="" bdRadius={'9px'} value='criar curriculo' />
                        </div>
                    </fieldset>
                  </form>
              {
                curriculum && <>
                   <FormSkill />
                <FormTrainning />
                <FormExperience />
                
                
                </>
              }
                 

                   
                
            </Page>
        </ContentPage>
    </Layout>
}