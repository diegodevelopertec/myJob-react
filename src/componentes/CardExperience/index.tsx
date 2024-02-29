
import { Container } from "./style"
import { Button } from "../Button"
import { IExperience } from "../../interfaces/experience"
import { useLocation } from "react-router-dom"
import { GlobalStyle } from "../../globalStyle"
import { toast } from "react-toastify"
import LixeiraIcon from "../../assets/svgs/lixeira"
import { Tooltip } from "react-tooltip"

type Props={
    experience:IExperience
}
export default ({experience}:Props)=>{
    const location=useLocation()
    
    const deleteExperience=async()=>{
       /*
 const response=await apiExperiences.deleteExperiences(experience.id)
        if(response){
            toast.success('Experiencia excluida')
        }else{
            console.log(response.data)
        }

       */

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
                onClick={()=>deleteExperience()}
                data-tooltip-id="my-tooltip"
                  data-tooltip-content='deletar Experiência'
                  data-tooltip-place="left"
            >
             <LixeiraIcon />   
            </ Button>
        </div>}
        <Tooltip id="my-tooltip" />
    </Container>

}