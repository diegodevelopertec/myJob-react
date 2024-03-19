import {  useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Input } from "../../componentes/Input"
import { Layout } from "../../componentes/Layout"
import { TextArea } from "../../componentes/TextArea"
import {  Page } from "./style"
import { State, apiStatesCity } from "../../actions/stateCity"
import { useFormik } from "formik"
import { schemaValidateCurriculum } from "../../validations/curriculum.validation"
import { useAuthContext } from "../../context/authContext"
import FormSkill from "../../componentes/FormSkill"
import FormTrainning from "../../componentes/FormTrainning"
import FormExperience from "../../componentes/FormExperience"
import User from "../../assets/svgs/user"
import { apiCurriculum } from "../../actions/apiCurriculum"
import { toast } from "react-toastify"


  

export const CreateCurriculum=()=>{
    const {user}=useAuthContext()
    const [curriculum]=useState(false)
    const {curriculumContext,setCurriculumContext}=useAuthContext()
    const [stateSelected,setStateSelected]=useState<string | null>('SP') //estado string
    const [citySelected,setCitySelected]=useState<string | null>('São Paulo')         //estado object
    const [statesList,setStatesList]=useState<State[] | []>([])   //lista de estados
    const [cityList,setCityList]=useState<{id:number,nome:string}[] | []>([])    //lista de cidades do estado


    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStateSelected(e.target.value)
        
      };
    
useEffect(()=>{
    const getStates=async()=>{
        const listStates=await apiStatesCity.getStates() as State[]
        setStatesList(listStates)
    }
    getStates()
},[])

useEffect(()=>{
   if(stateSelected){
        const stateObject=statesList.find(s=>s.sigla === stateSelected)
        const getCitys=async()=>{
           if(stateObject){
             const citys=await apiStatesCity.getCityFromState(stateObject.id as number) as {id:number,nome:string}[]
             setCityList(citys)
          }
        }
      getCitys()
    }

},[stateSelected])







const Formik=useFormik({
    initialValues:{
        name: curriculumContext?.name ? curriculumContext.name : '',
        lastname:curriculumContext?.lastname ? curriculumContext.lastname : '',
        tel:curriculumContext?.tel ? curriculumContext.tel : '',
        office:curriculumContext?.office ? curriculumContext.office : '',
        pcd:curriculumContext?.pcd ? curriculumContext.pcd : '0' ,
        deficiency:curriculumContext?.deficiency ? curriculumContext.deficiency : '',
        email:curriculumContext?.email ? curriculumContext.email : '',
        github:curriculumContext?.github ? curriculumContext.github : '',
        linkedin:curriculumContext?.linkedin ? curriculumContext.linkedin : '',
        about:curriculumContext?.about ? curriculumContext.about : '',
        city: citySelected ?  citySelected : '',
        state: stateSelected ?  stateSelected : '',
        dateNasc:curriculumContext?.state ? curriculumContext.state : '' ,
  },
    validationSchema:schemaValidateCurriculum,
    onSubmit:async(values,{resetForm})=>{
       if(user?.id){
        const response=await apiCurriculum.createCurriculum({iduser:user.id,...values,pcd:0})
        console.log(response)
        toast.success('Curriculo criado')
       }
        resetForm()
    }
})






    function setFieldValue(arg0: string, novoValor: string) {
        throw new Error("Function not implemented.")
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
                          <Input type="tel"  name="tel" value={Formik.values.tel}  onChange={Formik.handleChange}/>
                          {Formik.touched.tel && <p>{Formik.errors.tel}</p>}
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">Linkedin</label>
                          <Input type="url"  name="linkedin" value={Formik.values.linkedin}  onChange={Formik.handleChange} />
                          {Formik.touched.linkedin && <p>{Formik.errors.linkedin}</p>}
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">É da area de TI? Github</label>
                            <Input type="url" name="github" value={Formik.values.github}  onChange={Formik.handleChange} />
                            {Formik.touched.github && <p>{Formik.errors.github}</p>}
                        </div>
                        <div className="cx-state-city">
                            <div className="cx-input">
                                <label htmlFor="">Estado</label>
                                <select name="state" onChange={e=>handleSelectChange(e)} > {statesList?.map((s,k)=>(
                                        <option key={s.id} value={s.sigla}>{s.sigla}-{s.nome}</option>
                                    ))}
                                </select>
                                {Formik.touched.state && <p>{Formik.errors.state}</p>}
                             </div>
                             <div className="cx-input">
                                <label htmlFor="">Cidade</label>
                                <select name="city" value={Formik.values.city} disabled={stateSelected ? false : true} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setCitySelected(e.target.value)}>
                                    {cityList?.map((c,k)=>(
                                       <option value={c.nome}>{c.nome}</option>
                                    ))}
                                </select>
                                {Formik.touched.city  && <p>{Formik.errors.city}</p>}
                             </div>
                              
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Profissão/Cargo</label>
                           <Input type="text"  name="office" value={Formik.values.office}  onChange={Formik.handleChange} />
                           {Formik.touched.office && <p>{Formik.errors.office}</p>}
                        </div>
                        <div className="cx-radio">
                           <label htmlFor="">você é uma pessoa PCD?</label>
                           <input type="radio" name="pcd" value={Formik.values.pcd}  onChange={Formik.handleChange}  />Sim
                           <input type="radio" name="pcd" value={Formik.values.pcd}  onChange={Formik.handleChange} />Não
                           {Formik.touched.pcd && <p>{Formik.errors.pcd}</p>}
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Se respondeu sim a pergunta anterior,qual a sua deficiência?</label>
                           <Input type="text" name="deficiency" value={Formik.values.deficiency} onChange={Formik.handleChange} />
                           {Formik.touched.deficiency && <p>{Formik.errors.deficiency}</p>}
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Sobre</label>
                          <TextArea h="250px" name="about" value={Formik.values.about} onChange={Formik.handleChange} placeholder="Fale um pouco sobre você,destaque suas habilidades">{Formik.values.about}</TextArea>
                          {Formik.touched.about && <p>{Formik.errors.about}</p>}
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Data de nascimento</label>
                           <Input type="date"   name="dateNasc" value={Formik.values.dateNasc}  onChange={Formik.handleChange}/>
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