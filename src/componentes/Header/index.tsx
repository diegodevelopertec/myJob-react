import { Link } from "react-router-dom"
import { Container } from "./style"
import { useGlobalContext } from "../../context/globalContext"
import MenuBurguerIcon from './../../assets/icons/menuburguer.png'
import MenuCloseIcon from './../../assets/icons/close.png'
import { useAuthContext } from "../../context/authContext"
import Lupa from "../../assets/svgs/lupa"


export const Header=()=>{
  const {user}=useAuthContext()
  const {stateMobile,handleStateMobile}=useGlobalContext()
  const conditionLinkClick=()=>stateMobile ? handleStateMobile(false) : handleStateMobile(true)




    return <Container activeMobile={stateMobile}>
        <div className="left">
           <Link to={''} >
             <h2><Lupa />MyJOB</h2></Link>
        </div>
        <div className="right">
          <div className="cx-btn">
            <button onClick={()=>handleStateMobile(true)}>
              <img src={MenuBurguerIcon} alt="" />
            </button>
          </div>
            <nav>
              <div className="close-menu">
                <button onClick={()=>handleStateMobile(false)}>
                  <img src={MenuCloseIcon} alt="" />
                </button>
              </div>
              <div className="links">
                {user === null &&  <>
                  <Link to={'/'} onClick={conditionLinkClick}>inicio</Link>
                  <Link to={'/vagas'} onClick={conditionLinkClick}>vagas</Link>
                  <Link to={'/cursos'} onClick={conditionLinkClick}>cursos</Link>
                  <Link to={'/login'} onClick={conditionLinkClick}>entrar</Link>
                  <Link to={'/cadastro'} onClick={conditionLinkClick} >cadastrar</Link>
                </> }
                {user && 
                    <>
                    <Link to={'/vagas'} onClick={conditionLinkClick}>vagas</Link>
                    <Link to={'/candidaturas'} onClick={conditionLinkClick}>candidaturas</Link>
                    <Link to={'/cursos'} onClick={conditionLinkClick}>cursos</Link>
                    <Link to={'/meus_cursos'} onClick={conditionLinkClick}>meus cursos</Link>
                    <Link to={'/conta'} onClick={conditionLinkClick} >minha conta</Link>
                    </>
                    
                }

              </div>
            </nav>
        </div>
    </Container>
}