
import { Container } from "./style"
import { IExperience } from "../../interfaces/experience"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { Tooltip } from "react-tooltip"
import Lixeira from "../../assets/svgs/lixeira"
import apiExperiences from "../../actions/apiExperiences"


type Props={
    experience:IExperience
}

export default ({experience}:Props)=>{
    const location=useLocation()
    
    const deleteExperience=async()=>{
       await apiExperiences.deleteExperienceId(experience.id)
            toast.success('Experiencia excluida')
    }
    
    return  <Container>
        <div className="left">
           <h3 className="office">{experience.office}</h3>
           <p className="company" >{experience.companyname}</p>
           <p className="desc">{experience.about}</p>
           
        </div>
        {!location.pathname.includes('painel') && <div className="right">
            <button  
                onClick={()=>deleteExperience()}
                data-tooltip-id="my-tooltip"
                data-tooltip-content='deletar Experiência'
                data-tooltip-place="left"
            >
             <Lixeira />   
            </button>
        </div>}
        <Tooltip id="my-tooltip" />
    </Container>

}