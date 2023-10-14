import { Routes as Router,Route } from "react-router-dom"
import { Vagas } from "../pages/vagas"
import { Candidaturas } from "../pages/candidaturas"
import { Conta } from "../pages/conta"
import { Login } from "../pages/login"
import { Cadastro } from "../pages/cadastro"
import { Home } from "../pages/home"
import { VagaId } from "../pages/vagaId"
import { useUserContext } from "../context/authcontext"


export const Routes=()=>{
    const {user}=useUserContext()
    return <Router>
        {!user && <>
            <Route path="/" element={<Home/>}/>
            <Route path="/vagas" element={<Vagas/>}/>
            <Route path="/vagas/:id" element={<VagaId />}/>
            <Route path="/login/:type?" element={<Login />}/>
            <Route path="/cadastro/:type?" element={<Cadastro />}/>
        
        </>
       }
        {
            user && <>
             <Route path="/vagas" element={<Vagas/>}/>
              <Route path="/vagas/:id" element={<VagaId />}/>
             <Route path="/candidaturas" element={<Candidaturas />}/>
             <Route path="/conta" element={<Conta />}/>
            </>
        }
    </Router>
}