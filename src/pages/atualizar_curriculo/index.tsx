import {  useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Input } from "../../componentes/Input"
import { Layout } from "../../componentes/Layout"
import { TextArea } from "../../componentes/TextArea"
import { apiStatesCity } from "../../actions/stateCity"
import { useAuthContext } from "../../context/authContext"
import { useFormik } from "formik"
import { schemaValidateCurriculum } from "../../validations/curriculum.validation"
import { toast } from "react-toastify"
import FormTrainning from "../../componentes/FormTrainning"
import FormExperience from "../../componentes/FormExperience"
import FormSkill from "../../componentes/FormSkill"
import User from "../../assets/svgs/user"
import { Page } from "./style"

interface State {
    id: number;
    nome: string;
    sigla: string;
}
  
export const UpdateCurriculum=()=>{

    const {curriculumContext}=useAuthContext()
    const [stateSelected,setStateSelected]=useState<string | null>(null) //estado string
    const [citySelected,setCitySelected]=useState<string | null>(null)         //estado object
    const [statesList,setStatesList]=useState<State[] | []>([])   //lista de estados
    const [cityList,setCityList]=useState<{id:number,nome:string}[] | []>([])    //lista de cidades do estado
   





 const Formik=useFormik({
        initialValues:{
            name:curriculumContext?.name ? curriculumContext.name : '' ,
            lastname:curriculumContext?.lastname,
            tel:curriculumContext?.tel,
            office:curriculumContext?.office,
            pcd:curriculumContext?.pcd,
            deficiency:curriculumContext?.pcd === 0 ? '' : curriculumContext?.deficiency,
            email:curriculumContext?.email,
            github:curriculumContext?.github,
            linkedin:curriculumContext?.linkedin,
            about:curriculumContext?.about,
            city:curriculumContext?.city,
            state:curriculumContext?.state,
            dateNasc:curriculumContext?.dateNasc as  string ,
      },
        validationSchema:schemaValidateCurriculum,
        onSubmit:(values)=>{

        }
    })

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



    return <Layout>
        <ContentPage titlePage="Atualizar Curriculo">
            <Page>
                <form action='' className="form" onSubmit={Formik.handleSubmit}>
                    <fieldset>
                        <legend><User /> Dados Pessoais</legend>
                        <div className="cx-input">
                            <label htmlFor="">Nome</label>
                            <Input type="text" value={Formik.values.name} name="name" onChange={Formik.handleChange}  />
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">Sobrenome</label>
                            <Input type="text" value={Formik.values.lastname} name="lastname" onChange={Formik.handleChange} />
                        </div>

                        <div className="cx-input">
                            <label htmlFor="">Email</label>
                            <Input type="email" value={Formik.values.email} name="email" onChange={Formik.handleChange}/>
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Telefone</label>
                          <Input type="tel" value={Formik.values.tel} name="tel" onChange={Formik.handleChange}  />
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">Linkedin</label>
                          <Input type="url" value={Formik.values.linkedin} name="linkedin" onChange={Formik.handleChange} />
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">É da area de TI? Github</label>
                          <Input type="url" value={Formik.values.github} name="github" onChange={Formik.handleChange}/>
                        </div>
                        <div className="cx-state-city">
                            <div className="cx-input">
                                <label htmlFor="">Estado</label>
                                <select value={Formik.values.state} name="state" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setStateSelected(e.target.value)}>
                                    {statesList?.map((s,k)=>(
                                        <option value={s.sigla}>{s.sigla}-{s.nome}</option>
                                    ))}
                                </select>
                               
                             </div>
                             <div className="cx-input">
                                <label htmlFor="">Cidade</label>
                                <select value={Formik.values.city} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setCitySelected(e.target.value)}>
                                    {cityList?.map((c,k)=>(
                                       <option value={c.nome}>{c.nome}</option>
                                    ))}
                                </select>
                               
                             </div>
                              
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Profissão/Cargo</label>
                           <Input type="text" name="office" value={Formik.values.office}  onChange={Formik.handleChange} />
                        </div>
                        <div className="cx-radio">
                           <label htmlFor="">você é uma pessoa PCD?</label>
                          <input type="radio" value={'Sim'} checked={Formik.values.pcd === 1 ? true : false } onChange={Formik.handleChange} name="pcd" />Sim
                          <input type="radio" value={'Nao'} checked={Formik.values.pcd === 0 ? true : false} onChange={Formik.handleChange} name="pcd"/>Não
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Se respondeu sim a pergunta anterior,qual a sua deficiência?</label>
                           <Input type="text" value={Formik.values.deficiency} onChange={Formik.handleChange} name="deficiency"  />
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Sobre</label>
                          <TextArea h="250px" value={Formik.values.about} onChange={Formik.handleChange} placeholder="Fale um pouco sobre você,destaque suas habilidades">{Formik.values.about}</TextArea>
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Data de nascimento</label>
                           <Input type="date" value={Formik.values.dateNasc} name="dateNasc" onChange={Formik.handleChange} />
                        </div>
                        <div className="cx-btn">
                            <input type="submit" value='atualizar' />
                        </div>
                    </fieldset>
                    </form>
                   <>
                        <FormSkill />
                        <FormTrainning />
                        <FormExperience />
 </>
                
            </Page>
        </ContentPage>
    </Layout>
}