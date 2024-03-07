import {  useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Input } from "../../componentes/Input"
import { Layout } from "../../componentes/Layout"
import { TextArea } from "../../componentes/TextArea"
import { BoxNewExperienceAndTrainning, Page } from "./style"
import Close from "../../assets/svgs/close"
import { apiStatesCity } from "../../actions/stateCity"
import { useAuthContext } from "../../context/authContext"
import { useFormik } from "formik"
import curriculumInitialvalues from "../../validations/initialValues/curriculumInitialvalues"
import { schemaValidateCurriculum } from "../../validations/curriculum.validation"
import CardTrainning from "../../componentes/CardTrainning"
import CardExperience from "../../componentes/CardExperience"
import Lixeira from "../../assets/svgs/lixeira"
import apiSkill from "../../actions/apiSkill"

interface State {
    id: number;
    nome: string;
    sigla: string;
}
  


export const UpdateCurriculum=()=>{
    const [newTrainning,setNewTrainning]=useState<boolean>(false)
    const [newExperience,setNewExperience]=useState<boolean>(false)
    const [newSkill,setNewSkill]=useState<boolean>(false)
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
                <form action='' onSubmit={Formik.handleSubmit}>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
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
                          <input type="radio" value={Formik.values.pcd} checked={Formik.values.pcd === 1 ? true : false} onChange={Formik.handleChange} name="pcd" />Sim
                          <input type="radio" checked={Formik.values.pcd === 1 ? true : false} onChange={Formik.handleChange} name="pcd"/>Não
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
                            <button>continuar a preencher</button>
                        </div>
                    </fieldset>
                  
                   {curriculumContext && <>
                    <fieldset>
                        <legend>Habilidades 
                            {!newSkill &&  <span onClick={()=>setNewSkill(true)}>adicionar nova</span>}
                         </legend>
                        <BoxNewExperienceAndTrainning newItem={newSkill}>
                           <div className="header-box">
                               <h2>Nova Habilidade</h2>
                               <span onClick={()=>setNewSkill(false)}><Close /></span>
                           </div>
                            <div className="cx-input">
                               <Input type="text" placeholder="digite uma habilidade ...Ex:Boa comunicação,pacote office,...." />
                            </div>
                        
                            <div className="cx-btn">
                                <button>Adicionar</button>
                            </div>
                            </BoxNewExperienceAndTrainning >
                            {
                                <div className="box-skills">
                                    {curriculumContext.skills.map((i,k)=>(
                                        <li>{i.name} <span onClick={()=>apiSkill.deleteSkillId(i.id)}><Lixeira /></span></li>
                                    ))}
                                </div>
                            }
                   </fieldset>
                    <fieldset>
                        <legend>Formação 
                            {!newTrainning &&  <span onClick={()=>setNewTrainning(true)}>adicionar nova</span>}
                         </legend>
                        <BoxNewExperienceAndTrainning newItem={newTrainning}>
                           <div className="header-box">
                               <h2>Nova Formação</h2>
                               <span onClick={()=>setNewTrainning(false)}><Close /></span>
                           </div>
                            <div className="cx-input">
                               <label htmlFor="">Nome</label>
                               <Input type="text" placeholder="digite o nome do curso" />
                            </div>
                            <div className="cx-input">
                               <label htmlFor="">Instituição de Ensino</label>
                               <Input type="text" placeholder="digite o nome da instituição" />
                            </div>
                            <div className="cx-dates">
                                <div className="cx-date">
                                    <label htmlFor="">Inicio</label>
                                    <Input type="date" />
                                </div>
                                <div  className="cx-date">
                                    <label htmlFor="">Conclusão:</label>
                                    <Input type="date" />
                                </div>
                                <div className="radio">
                                    <label htmlFor="">Cursando?</label>
                                    <input type="radio" name="cursando" id="" />Sim
                                    <input type="radio" name="cursando" id="" />Não
                                </div>
                            </div>
                            <div className=" cx-radio">
                               <label htmlFor="">Tipo</label>
                                <span> <input type="radio" name="formacao" />Ensino Fundamental</span>
                                <span> <input type="radio" name="formacao" />Ensino Fundamental</span>
                                <span> <input type="radio" name="formacao"  />Ensino Superior</span>
                                <span> <input type="radio" name="formacao"/>Curso Livre/Bootcamp</span>
                            </div>
                            <div className="cx-btn">
                                <button>Adicionar</button>
                            </div>
                            </BoxNewExperienceAndTrainning >
                            {
                                <div className="box-trainnings">
                                    {curriculumContext.trainnings.map((t,k)=><CardTrainning key={k} trainning={t}/>)}
                                </div>
                            }
                    </fieldset>
                    <fieldset>
                        <legend>Experiência Profissional 
                            {!newExperience &&  <span onClick={()=>setNewExperience(true)}>adicionar nova</span>}
                        </legend>
                        <BoxNewExperienceAndTrainning newItem={newExperience}>
                           <div className="header-box">
                               <h2>Nova Experiência</h2>
                               <span onClick={()=>setNewExperience(false)}><Close /></span>
                           </div>
                            <div className="cx-input">
                               <label htmlFor="">Cargo</label>
                               <Input type="text" placeholder="digite seu cargo"/>
                            </div>
                            <div className="cx-input">
                               <label htmlFor="">Empresa</label>
                               <Input type="text" placeholder="digite o nome da empresa"  />
                            </div>
                            <div className="cx-dates">
                                <div className="cx-date">
                                    <label htmlFor="">Inicio</label>
                                    <Input type="date" />
                                </div>
                                <div className="cx-date">
                                    <label htmlFor="">Conclusão:</label>
                                    <Input type="date" />
                                </div>
                                <div className="radio">
                                    <label htmlFor="">Trabalha aqui?</label>
                                    <input type="radio" name="" id="" />Sim
                                    <input type="radio" name="" id="" />Não
                                </div>
                            </div>
                            <div className="cx-input">
                               <label htmlFor="">Sobre</label>
                                <TextArea w="auto" placeholder="digite algo sobre essa sua experiencia..." h="240px"></TextArea>
                            </div>
                            <div className="cx-btn">
                                <button>Adicionar</button>
                            </div>
                        </BoxNewExperienceAndTrainning>
                        {
                                <div className="box-experiences">
                                    {curriculumContext.experiences.map((xp,k)=><CardExperience key={k} experience={xp}/>)}
                                </div>
                            }
                        </fieldset>
                        
                      
                   
                     <div className="cx-btn">
                        <input type="submit" value={'Salvar informações'}/>
                    </div>
                   
                   
                   
                   </>}
                </form>
            </Page>
        </ContentPage>
    </Layout>
}