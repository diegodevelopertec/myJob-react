
import { Container } from "./style"
import { Button } from "../Button"
import { IExperience } from "../../interfaces/experience"
import { useLocation } from "react-router-dom"
import { GlobalStyle } from "../../globalStyle"
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
            <Button  radius="5px" h="45px" w="45px" p="5px"
                bgH={GlobalStyle.bgThemeSecondary} 
                bgColor={'white'}  
                onClick={()=>deleteExperience()}
                data-tooltip-id="my-tooltip"
                data-tooltip-content='deletar Experiência'
                data-tooltip-place="left"
            >
             <Lixeira />   
            </ Button>
        </div>}
        <Tooltip id="my-tooltip" />
    </Container>

}