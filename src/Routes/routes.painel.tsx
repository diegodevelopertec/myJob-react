import { Routes as Router,Route } from "react-router-dom"
import { HomePainel } from "../pages/painel/home"
import { CandidatosPainel } from "../pages/painel/candidatos"
import { VagasPostadasPainel } from "../pages/painel/vagasPostadas"


export const RoutesPainel=()=>{
    
    return <Router> 
            <Route path="/painel/" element={<HomePainel />}/>
            <Route path="/painel/recrutador/candidatos" element={<CandidatosPainel />}/>
            <Route path="/painel/recrutador/vagaspostadas" element={<VagasPostadasPainel />}/>
       
    
    </Router>
}