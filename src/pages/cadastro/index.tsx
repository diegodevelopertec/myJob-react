
import { useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Input } from "../../componentes/Input"
import { Page } from "./style"
import { Link,useNavigate, useParams } from "react-router-dom"
import * as Yup from 'yup';
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { Layout } from "../../componentes/Layout"
import { apiAuth } from "../../actions/auth.action"
import { useUserContext } from "../../context/authcontext"


const schemaValidate = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório').trim(),
    lastname: Yup.string().required('O sobrenome é obrigatório').trim(),
    email:Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().trim().min(5,'Minino 5 caracteres').required('A senha é obrigatória'),
    tel: Yup.string().matches(/^(?:(?:\+|00)55|0?[1-9]{2})[0-9]{8,9}$/, 'Número de celular inválido').required('Número de celular é obrigatório'),
  
  }).required()

export const Cadastro=()=>{
    const params=useParams()
    const navigate=useNavigate()
    const {type}=params
    const [radioValue, setRadioValue] = useState<string>(type as string);
    const {RegisterAuth}=useUserContext()

    useEffect(()=>{
      document.title='MyJobs/Cadastro'
    },[])

   //valores iniciais
  const initialValues={
    name:'',
    lastname:'',
    email:'',
    password:'',
    tel:'',
    type:radioValue
  }

  type FormValue={
    name:string,
    lastname:string,
    email:string,
    password:string,
    tel:string,
    type:string
  }




const Formik=useFormik({
  initialValues:initialValues,
  validationSchema:schemaValidate,
  onSubmit:async (values:FormValue,{resetForm}) =>{
    if(values.type !== ':type' ){
      const response=await apiAuth.signUp(values)
      const {user,token}=response.data
         if(user && token ){
            if(user.type ==='candidato'){
              toast.success('Conta criada com sucesso')
              console.log(response.data)
              RegisterAuth(user,token)
              navigate('/vagas')
              
            }else if(user.type === 'recrutador'){
              toast.success('Conta criada com sucesso')
              console.log(response.data)
              RegisterAuth(user,token)
              navigate('/painel/admin')
              
              
            } 
         }else{
            toast.error('Usuário já tem uma conta')
            console.log(response.data)
         }
     }else{
      toast.error('Indique como deseja se candidatar : candidato ou recrutador?')
     }

  }
})



  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setRadioValue(newValue);
    Formik.setFieldValue('type', newValue);
  };
   
   
   return <Layout>
    <ContentPage >
      
      <Page>
       <h3>Cadastro  { type !== ':type' &&  <span>{`>> ${type}`}</span> } </h3>
       <p>Preencha os campos com suas informações para criar sua conta:</p>
       <form onSubmit={Formik.handleSubmit} >
        <div className="cx-inputs">
          <div className="cx-input">
            <Input type="text" placeholder="Digite seu nome" name="name" value={Formik.values.name} 
              onChange={Formik.handleChange}  
            />
            {Formik.errors.name && <p>{Formik.errors.name}</p>}
          </div>
          <div className="cx-input">
            <Input type="text" placeholder="Digite seu sobrenome" id="lastname" name="lastname" 
                value={Formik.values.lastname} onChange={Formik.handleChange}   
            />
              {Formik.errors.lastname && <p>{Formik.errors.lastname}</p>}
          </div>
          <div className="cx-input">
            <Input type="tel" placeholder="Digite seu telefone" id="tel" name="tel" 
                value={Formik.values.tel} onChange={Formik.handleChange}   
            />
              {Formik.errors.tel && <p>{Formik.errors.tel}</p>}
          </div>
          <div className="cx-input">
              <Input type="email" required placeholder="Digite seu email" id="email"  name="email"
               value={Formik.values.email} onChange={Formik.handleChange}   
              />
                 {Formik.errors.email && <p>{Formik.errors.email}</p>}
          </div>
          <div className="cx-input">
             <Input type="password" placeholder="Digite sua senha" id="password" name="password" 
              value={Formik.values.password} onChange={Formik.handleChange}   
             />
               {Formik.errors.password && <p>{Formik.errors.password}</p>}
          </div>
          <div className="cx-radios">
          <div className="radio-item">
            <input type="radio"  
              checked={radioValue === 'candidato'}
              value='candidato'
              onChange={handleRadioChange}

            />sou candidato
          </div>
          <div className="radio-item">
            <input type="radio" 
              checked={radioValue === 'recrutador'}
               value={'recrutador'}
               onChange={handleRadioChange} 
            />sou recrutador
          </div>
          </div>
          <button type='submit'>criar conta</button>
          <div className="divider"></div>
          <div className="actions">
            <p>Já tem uma conta ?<Link to='/login'>Clique aqui</Link></p>
          </div>
        </div>
       </form>
      </Page>
  </ContentPage>
   </Layout>
}

function RegisterAuth(user: any, token: any) {
  throw new Error("Function not implemented.")
}
