import {Link}  from 'react-router-dom'
import { Container, HeaderPainel, Main } from "./style"
import { ReactNode, useEffect, useState } from 'react'
import Lupa from '../../assets/svgs/lupa'
import List from '../../assets/svgs/list'
import Addlist from '../../assets/svgs/addlist'
import Home from '../../assets/svgs/home'
import Candidatesearch from '../../assets/svgs/candidatesearch'
import User from '../../assets/svgs/user'
import Company from '../../assets/svgs/company'
import { useAuthContext } from '../../context/authContext'
import apiCompany from '../../actions/apiCompany'
import { CompanyInterface } from '../../interfaces/company'

type Props={
    children:ReactNode,
    p?:string
}

export const Painel=({children,p}:Props)=>{
    const {user}=useAuthContext()
    const [companyName,setCompanyName]=useState<string>('')
   
    useEffect(()=>{
        
     const getCompanyfromUser=async()=>{
        if(user){
            const data=await apiCompany.getCompanyFromUser(user.id as number) as CompanyInterface
            localStorage.setItem('@companyid',JSON.stringify(data?.id))
            setCompanyName(data.name)
            const companyStorage=localStorage.getItem('@companyid')
            const parsedCompanyStorage=JSON.parse(companyStorage as string)
            
        }
                    
                 
    }
    getCompanyfromUser()
        
     },[])
     
    return <Container>
        <HeaderPainel>
            <div className="logo">
                <h3><Lupa />MyJOB</h3>
                <hr />
                <p>{companyName}</p>
            </div>
            <nav>
                <Link to='/painel/recrutador' ><Home />Inicio</Link>
                <Link to='/painel/recrutador/candidatos' ><Candidatesearch />Profissionais</Link>
                <Link to='/painel/recrutador/vagaspostadas'><List />Vagas Postadas</Link>
                <Link to='/painel/recrutador/novavaga'><Addlist />Nova Vaga</Link>
                <Link to='/painel/recrutador/minha-conta' ><User />Conta</Link>
                <Link to='/painel/recrutador/sobre-empresa' ><Company />A Empresa</Link>
            </nav>
        </HeaderPainel>
        <Main p={p}>
           {children}
        </Main>
    </Container>
}