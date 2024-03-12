import { useState } from "react"
import Close from "../../assets/svgs/close"
import { Input } from "../Input"
import { BoxForm, BoxNewExperienceAndTrainning } from "./style"
import { useAuthContext } from "../../context/authContext"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { TextArea } from "../TextArea"
import CardExperience from "../CardExperience"
import { schemaValidationExperience } from "../../validations/experience.validation"
import apiExperiences from "../../actions/apiExperiences"
import Experience from "../../assets/svgs/experience"


export default ()=>{
    const [newExperience,setNewExperience]=useState<boolean>(false)
    const {curriculumContext}=useAuthContext()



const Formik=useFormik({
    initialValues:{
        office:'',companyname:'',start:'',end:'',about:'',active:'Não',
    },
    validationSchema:schemaValidationExperience,
    onSubmit:async (values, {resetForm})=>{
        const data={
            ...values,
            idcurriculum:curriculumContext?.id as number,
            active:values.active === 'Sim' ? 1 : 0
        }
       await apiExperiences.addExperience(data)
       resetForm()
       toast.success('nova formação adicionada')
      
       
      
    }})



 return  <BoxForm>
    <legend><Experience /> Experiência Profissional {!newExperience &&  <span onClick={()=>setNewExperience(true)}>adicionar nova</span>}</legend>
     <BoxNewExperienceAndTrainning newItem={newExperience}>
           <form action="" onSubmit={Formik.handleSubmit}>
                <div className="header-box">
                        <h2>Nova Experiência</h2>
                        <span onClick={()=>setNewExperience(false)}><Close /></span>
                    </div>
                    <div className="cx-input">
                        <label htmlFor="">Cargo</label>
                        <Input type="text" name="office" value={Formik.values.office} onChange={Formik.handleChange} placeholder="digite o nome do curso" />
                        {Formik.touched.office && <p>{Formik.errors.office}</p>}
                    </div>
                    <div className="cx-input">
                        <label htmlFor="">Empresa</label>
                        <Input type="text" name="companyname" value={Formik.values.companyname} onChange={Formik.handleChange}  placeholder="digite o nome da instituição" />
                        {Formik.touched.companyname && <p>{Formik.errors.companyname}</p>}
                    </div>
                <div className="cx-dates">
                    <div className="cx-date">
                        <label htmlFor="" >Inicio</label>
                        <Input type="date" name="start" value={Formik.values.start} onChange={Formik.handleChange} />
                        {Formik.touched.start && <p>{Formik.touched.start}</p>}
                    </div>
                    <div  className="cx-date">
                        <label htmlFor="">Término:</label>
                        <Input type="date" name="end" value={Formik.values.end} onChange={Formik.handleChange} />
                        {Formik.touched.end && <p>{Formik.touched.end}</p>}
                    </div>
                    <div className="radio">
                        <label htmlFor="">Trabalha Aqui atualmente?</label>
                        <input type="radio" name="active" value='Sim' onChange={Formik.handleChange} checked={Formik.values.active === 'Sim'}  />Sim
                        <input type="radio" name="active"  value='Não' onChange={Formik.handleChange}  checked={Formik.values.active === 'Não'}  />Não
                       
                    </div>
                </div>
                <div className="cx-input-textarea">
                    <label htmlFor="">Sobre</label>
                    <TextArea h="160px" name="about" onChange={Formik.handleChange}  value={Formik.values.about} placeholder="Digite um pouco sobre suas funções" w="96%" bg="#dedede">{Formik.values.about}</TextArea>
                    {Formik.touched.about && <p>{Formik.errors.about}</p>}
                </div>
                <div className="cx-btn"> <button type="submit">Adicionar</button> </div>
           </form>
     </BoxNewExperienceAndTrainning >
        {
            <div className="box-trainnings">
                {curriculumContext?.experiences.map((t,k)=><CardExperience key={k} experience={t}/>)}
            </div>
        }
   </BoxForm>
 

}