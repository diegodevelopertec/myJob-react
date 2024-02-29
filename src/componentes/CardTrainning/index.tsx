import { ITrainnings } from "../../interfaces/trainnings"
import { Box } from "../Box"
import { Container } from "./style"
import { Button } from "../Button"
import { useLocation, useNavigate } from "react-router-dom"
import EducationIcon from "../../assets/svgs/education"
import { GlobalStyle } from "../../globalStyle"
import { toast } from "react-toastify"
import LixeiraIcon from "../../assets/svgs/lixeira"
import { Tooltip } from "react-tooltip"


type Props={
    trainning:ITrainnings
}
export default ({trainning}:Props)=>{
    const location=useLocation()

    const deleteTrainning=async()=>{
       /*
       const response=await apiTrainnings.deleteTrainning(trainning.id)
        if(response){
            toast.success('Formação  excluida')
        }else{
            console.log(response.data)
        }


       */

    }

    return  <Container>
        <div className="left">
          <h3><EducationIcon />{trainning.name}</h3>
          <p>{trainning.school}</p>
        </div>
        {!location.pathname.includes('painel') && <div className="right">
          <Button   radius="5px" h="45px" w="45px" p="5px"
                bgH={GlobalStyle.bgThemeSecondary} 
                onClick={()=>deleteTrainning()}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={'deletar Formação'}
                data-tooltip-place="left"
            >
             <LixeiraIcon />   
            </ Button>
        </div>}
        <Tooltip id="my-tooltip" />
    </Container>
   
}