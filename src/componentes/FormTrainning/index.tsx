import { useState } from "react"
import Close from "../../assets/svgs/close"
import { Input } from "../Input"
import { BoxForm, BoxNewExperienceAndTrainning } from "./style"
import { useAuthContext } from "../../context/authContext"
import CardTrainning from "../CardTrainning"
import { useFormik } from "formik"
import { schemaValidationTrainnning } from "../../validations/trainning.validations"
import apiTrainning from "../../actions/apiTrainning"
import { toast } from "react-toastify"
import Education from "../../assets/svgs/education"


export default ()=>{
    const [newTrainning,setNewTrainning]=useState<boolean>(false)
    const {curriculumContext}=useAuthContext()



const Formik=useFormik({
    initialValues:{
        name:'',school:'',start:'',end:'',type:'Ensino Médio',active:'Não',
    },
    validationSchema:schemaValidationTrainnning,
    onSubmit:async (values, {resetForm})=>{
        const data={
            ...values,
            idcurriculum:curriculumContext?.id as number,
            active:values.active === 'Sim' ? 1 : 0
        }
        const response=await apiTrainning.addTrainning(data)
        toast.success('noba formação adicionada')
        resetForm()
    }})



 return  <BoxForm>
    <legend><Education /> Formação  {!newTrainning &&  <span onClick={()=>setNewTrainning(true)}>adicionar nova</span>}</legend>
     <BoxNewExperienceAndTrainning newItem={newTrainning}>
           <form action="" onSubmit={Formik.handleSubmit}>
                <div className="header-box">
                        <h2>Nova Formação</h2>
                        <span onClick={()=>setNewTrainning(false)}><Close /></span>
                    </div>
                    <div className="cx-input">
                        <label htmlFor="">Nome</label>
                        <Input type="text" name="name" value={Formik.values.name} onChange={Formik.handleChange} placeholder="digite o nome do curso" />
                        {Formik.touched.name && <p>{Formik.errors.name}</p>}
                    </div>
                    <div className="cx-input">
                        <label htmlFor="">Instituição de Ensino</label>
                        <Input type="text" name="school" value={Formik.values.school} onChange={Formik.handleChange}  placeholder="digite o nome da instituição" />
                        {Formik.touched.school && <p>{Formik.errors.school}</p>}
                    </div>
                <div className="cx-dates">
                    <div className="cx-date">
                        <label htmlFor="" >Inicio</label>
                        <Input type="date" name="start" value={Formik.values.start} onChange={Formik.handleChange} />
                        {Formik.touched.start && <p>{Formik.touched.start}</p>}
                    </div>
                    <div  className="cx-date">
                        <label htmlFor="">Conclusão:</label>
                        <Input type="date" name="end" value={Formik.values.end} onChange={Formik.handleChange} />
                        {Formik.touched.end && <p>{Formik.touched.end}</p>}
                    </div>
                    <div className="radio">
                        <label htmlFor="">Cursando?</label>
                        <input type="radio" name="active" value='Sim' onChange={Formik.handleChange} checked={Formik.values.active === 'Sim'}  />Sim
                        <input type="radio" name="active"  value='Não' onChange={Formik.handleChange}  checked={Formik.values.active === 'Não'}  />Não
                       
                    </div>
                </div>
                <div className=" cx-radio">
                    <label htmlFor="">Tipo</label>
                    <span> <input type="radio" name="type"  value='Ensino Fundamental' checked={Formik.values.type === 'Ensino Fundamental'}  onChange={Formik.handleChange}  />Ensino Fundamental</span>
                    <span> <input type="radio"  name="type"  value='Ensino Médio' checked={Formik.values.type=== 'Ensino Médio'} onChange={Formik.handleChange}  />Ensino Médio</span>
                    <span> <input type="radio" name="type"  value='Ensino Superior' checked={Formik.values.type === 'Ensino Superior'} onChange={Formik.handleChange} />Ensino Superior</span>
                    <span> <input type="radio"  name="type"  value='Curso Livre/Bootcamp' checked={Formik.values.type === 'Curso Livre/Bootcamp'}  onChange={Formik.handleChange} />Curso Livre/Bootcamp</span>
                </div>
                <div className="cx-btn"> <button type="submit">Adicionar</button> </div>
           </form>
     </BoxNewExperienceAndTrainning >
        {
            <div className="box-trainnings">
                {curriculumContext?.trainnings.map((t,k)=><CardTrainning key={k} trainning={t}/>)}
            </div>
        }
   </BoxForm>
 

}