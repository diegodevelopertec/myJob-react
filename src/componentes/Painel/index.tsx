import {Link}  from 'react-router-dom'
import { Container, HeaderPainel, Main } from "./style"
import { RoutesPainel } from '../../Routes/routes.painel'
import { Children, ReactNode } from 'react'

type Props={
    children:ReactNode
}
export const Painel=({children}:Props)=>{
    return <Container>
        <HeaderPainel>
            <div className="logo">
                <h3>{`MyJOB />`}</h3>
                <p>AmazonaTech</p>
            </div>
            <nav>
                <Link to='/painel/recrutador' >Inicio</Link>
                <Link to='/painel/recrutador/candidatos' >Candidatos</Link>
                <Link to='/painel/recrutador/vagaspostadas'>Vagas Postadas</Link>
                <Link to='/painel/recrutador/novavaga'>Nova Vaga</Link>
                <Link to='/painel/recrutador/minha-conta' >Conta</Link>
                <Link to='/painel/recrutador/sobre-empresa' >A Empresa</Link>
            </nav>
        </HeaderPainel>
        <Main>
           {children}
        </Main>
    </Container>
}