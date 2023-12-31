
import { useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Input } from "../../componentes/Input"
import { useUserContext } from "../../context/authcontext"
import { Page } from "./style"
import { Link,useNavigate, useParams } from "react-router-dom"
import * as Yup from 'yup';
import { useFormik } from "formik"
import { apiAuth } from "../../actions/auth.action"
import { toast } from "react-toastify"
import { Layout } from "../../componentes/Layout"


const schemaValidate = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório').trim(),
    lastname: Yup.string().required('O sobrenome é obrigatório').trim(),
    email:Yup.string().email().matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Email inválido').required('Email é obrigatório'),
    password: Yup.string().trim().required('A senha é obrigatória'),
    tel: Yup.string().matches(/^(?:(?:\+|00)55|0?[1-9]{2})[0-9]{8,9}$/, 'Número de celular inválido').required('Número de celular é obrigatório'),
  
  });

export const Cadastro=()=>{
    const params=useParams()
    const navigate=useNavigate()
    const {registerAuth}=useUserContext()
    const {type}=params
    const [radioValue, setRadioValue] = useState<string>(type as string);
   
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
  //config de envio de formulario
const Formik=useFormik({
  initialValues:initialValues,
  validationSchema:schemaValidate,
  onSubmit:async (values:FormValue,{resetForm}) =>{
 

  }
})


//funcao para gerenciar inouts radio

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setRadioValue(newValue);
    Formik.setFieldValue('type', newValue);
  };
   
   
   return <Layout>
    <ContentPage >
      
      <Page>
       <h3>Cadastro  {type ? <span>{`>> ${type}`}</span>  : null} </h3>
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