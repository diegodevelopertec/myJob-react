import {Link}  from 'react-router-dom'
import { Container, HeaderPainel, Main } from "./style"
import { RoutesPainel } from '../../Routes/routes.painel'
import { Children, ReactNode } from 'react'
import Lupa from '../../assets/svgs/lupa'
import Listjob from '../../assets/svgs/listjob'
import List from '../../assets/svgs/list'
import Addlist from '../../assets/svgs/addlist'
import Home from '../../assets/svgs/home'
import Search from '../../assets/svgs/search'
import Candidatesearch from '../../assets/svgs/candidatesearch'
import User from '../../assets/svgs/user'
import Company from '../../assets/svgs/company'

type Props={
    children:ReactNode
}
export const Painel=({children}:Props)=>{
    return <Container>
        <HeaderPainel>
            <div className="logo">
                <h3><Lupa />MyJOB</h3>
                <p>AmazonaTech</p>
            </div>
            <nav>
                <Link to='/painel/recrutador' ><Home />Inicio</Link>
                <Link to='/painel/recrutador/candidatos' ><Candidatesearch />Candidatos</Link>
                <Link to='/painel/recrutador/vagaspostadas'><List />Vagas Postadas</Link>
                <Link to='/painel/recrutador/novavaga'><Addlist />Nova Vaga</Link>
                <Link to='/painel/recrutador/minha-conta' ><User />Conta</Link>
                <Link to='/painel/recrutador/sobre-empresa' ><Company />A Empresa</Link>
            </nav>
        </HeaderPainel>
        <Main>
           {children}
        </Main>
    </Container>
}