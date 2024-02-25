import { Routes as Router,Route } from "react-router-dom"
import { Vagas } from "../pages/vagas"
import { Candidaturas } from "../pages/candidaturas"
import { Conta } from "../pages/conta"
import { Login } from "../pages/login"
import { Cadastro } from "../pages/cadastro"
import { Home } from "../pages/home"
import { VagaId } from "../pages/vagaId"
import { HomePainel } from "../pages/painel/home"
import { CandidatosPainel } from "../pages/painel/candidatos"
import { VagasPostadasPainel } from "../pages/painel/vagasPostadas"
import { NovaVagaPainel } from "../pages/painel/novaVaga"
import { ContaPainel } from "../pages/painel/conta"
import { EmpresaPainel } from "../pages/painel/empresa"
import { Cursos } from "../pages/cursos"
import { CursoId } from "../pages/cursoId"
import {Plataforma}  from "../pages/plataforma"
import { MeusCursos } from "../pages/meuscursos"
import { CandidaturaId } from "../pages/candidaturaId"
import { CreateCurriculum } from "../pages/createCurriculum"




export const Routes=()=>{

    return <Router>
       <>
            <Route path="/" element={<Home/>}/>
            <Route path="/vagas" element={<Vagas/>}/>
            <Route path="/vagas/:id" element={<VagaId />}/>
            <Route path="/login/:type?" element={<Login />}/>
            <Route path="/cadastro/:type?" element={<Cadastro />}/>
            <Route path="/cursos" element={<Cursos />}/>
            <Route path="/cursos/:id" element={<CursoId />}/>
          
            //recurtador
            <Route path="/painel/recrutador" element={<HomePainel />}/>
            <Route path="/painel/recrutador/candidatos" element={<CandidatosPainel />}/>
            <Route path="/painel/recrutador/vagaspostadas" element={<VagasPostadasPainel />}/>
            <Route path="/painel/recrutador/novavaga" element={<NovaVagaPainel />}/>
            <Route path="/painel/recrutador/minha-conta" element={<ContaPainel />}/>
            <Route path="/painel/recrutador/sobre-empresa" element={<EmpresaPainel />}/>
        </>
       
        
         <>
             <Route path="/vagas" element={<Vagas/>}/>
              <Route path="/vagas/:id" element={<VagaId />}/>
             <Route path="/candidaturas" element={<Candidaturas />}/>
             <Route path="/candidaturas/:id" element={<CandidaturaId />}/>
             <Route path="/conta" element={<Conta />}/>
             <Route path="/cursos" element={<Cursos />}/>
             <Route path="/criar_curriculo" element={<CreateCurriculum />}/>
            <Route path="/cursos/:id" element={<CursoId />}/>
            <Route path="/meus_cursos" element={<MeusCursos />}/>
            <Route path="/plataforma_ead/curso/:cursoid" element={<Plataforma />}/>
            </>
        
    </Router>
}