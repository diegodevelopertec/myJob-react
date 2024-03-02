import { Container } from "./style"
import { Link } from "react-router-dom"
import { ICurriculum } from "../../interfaces/curriculum"
import { baseURL } from "../../services/axios.config"



type  props={
    curriculum:ICurriculum
}


export const CardCandidates = ({curriculum}:props)=>{
    return <Container>
        <div className="top">
            <div className="cx-img">
                {curriculum.user.photo !== null && <img src={`${baseURL}public/images/${curriculum.user.photo}`}  />}
                {curriculum.user.photo === null && <img src={`/assets/user.png`}  alt="" />}
            </div>
            <div className="cx-info">
                <h2 className="name"> {curriculum.user?.name}</h2>
            </div>
        </div>
        <div className="divider"></div>
        <div className="cargo">
           <p>{curriculum.office}</p>
        </div>
        <div className="divider"></div>
        <div className="action">
            <Link to={`/painel/recrutador/candidatos/${curriculum.id}`}>ver mais</Link>
        </div>
    </Container>
}