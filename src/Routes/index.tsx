import { Routes as Router,Route } from "react-router-dom"
import { Vagas } from "../pages/vagas"
import { Candidaturas } from "../pages/candidaturas"
import { Conta } from "../pages/conta"
import { Login } from "../pages/login"
import { Cadastro } from "../pages/cadastro"
import { Home } from "../pages/home"


export const Routes=()=>{
    return <Router>
          <Route path="/" element={<Home/>}/>
        <Route path="/vagas" element={<Vagas/>}/>
        <Route path="/candidaturas" element={<Candidaturas />}/>
        <Route path="/conta" element={<Conta />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
    </Router>
}