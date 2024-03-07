import { ITrainnings } from "../../interfaces/trainnings"
import { Container } from "./style"
import { Button } from "../Button"
import { useLocation} from "react-router-dom"
import EducationIcon from "../../assets/svgs/education"
import { GlobalStyle } from "../../globalStyle"
import { toast } from "react-toastify"
import LixeiraIcon from "../../assets/svgs/lixeira"
import { Tooltip } from "react-tooltip"
import apiTrainning from "../../actions/apiTrainning"


type Props={
    trainning:ITrainnings
}
export default ({trainning}:Props)=>{
    const location=useLocation()

    const deleteTrainning=async()=>{
       await apiTrainning.deleteTrainningId(trainning.id)
       toast.success('Formação  excluida')
        
}

    return  <Container>
        <div className="left">
          <h3><EducationIcon />{trainning.name}</h3>
          <p>{trainning.school}</p>
        </div>
        {!location.pathname.includes('painel') && <div className="right">
          <Button   radius="5px" h="45px" w="45px" p="5px"
                bgH={GlobalStyle.bgThemeSecondary} 
                onClick={deleteTrainning}
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