import { useState } from "react"
import Close from "../../assets/svgs/close"
import { Input } from "../Input"
import { BoxForm, BoxNewExperienceAndTrainning } from "./style"
import { useAuthContext } from "../../context/authContext"
import Lixeira from "../../assets/svgs/lixeira"
import apiSkill from "../../actions/apiSkill"
import { toast } from "react-toastify"
import Skills from "../../assets/svgs/skills"

export default ()=>{
    const [newSkill,setNewSkill]=useState<boolean>(false)
    const {curriculumContext}=useAuthContext()
   const [textSkill,setTextSkill]=useState('') 

  

const AddSkill=async()=>{
    if(textSkill.trim() !== '' && curriculumContext){
        await apiSkill.addSkill(curriculumContext.id,textSkill)
        setTextSkill('')
        toast.success('nova habilidade adicionada')
    }else{
        toast.error('Preencha o campo')
    }
}

const deleteSkillId=async(id:number)=>{
    await apiSkill.deleteSkillId(id)
    toast.success('habilidade deletada')
}
 return  <BoxForm>
    <legend><Skills />Habilidades {!newSkill &&  <span onClick={()=>setNewSkill(true)}>adicionar nova</span>}</legend>
     <BoxNewExperienceAndTrainning newItem={newSkill}>
                <div className="header-box">
                        <h2>Nova Habilidade</h2>
                        <span onClick={()=>setNewSkill(false)}><Close /></span>
                    </div>
                    <div className="cx-input">
                        <Input type="text" bg="#DEDEDE" name="textSkill" value={textSkill} onChange={e=>setTextSkill(e.target.value)} placeholder="digite uma nova habilidade" />
                     
                    </div>
                <div className="cx-btn"> <button onClick={AddSkill}>Adicionar</button> </div>
     </BoxNewExperienceAndTrainning >
        {
            <div >
               <ul className="box-skills" >
               {curriculumContext?.skills.map((s,k)=><li>{s.name}<span onClick={()=>deleteSkillId(s.id)}><Lixeira /></span></li>)}
               </ul>
            </div>
        }
   </BoxForm>
 

}