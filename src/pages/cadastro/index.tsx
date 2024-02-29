import { ChangeEvent, useEffect, useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Input } from "../../componentes/Input"
import { Page } from "./style"
import { Link,useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { Layout } from "../../componentes/Layout"
import { schemaValidateUser } from "../../validations/user"
import { apiAuth } from "../../actions/auth.action"
import { useAuthContext } from "../../context/authContext"




export const Cadastro=()=>{
    const params=useParams()
    const navigate=useNavigate()
    const {type}=params
    const [radioValue, setRadioValue] = useState<string>(type as string)
    const {SigUp}=useAuthContext()


  
    
    useEffect(()=>{
      document.title=`MyJobs/Cadastro/${type}`
    },[type])


  const initialValues={
    name:'',
    lastname:'',
    email:'',
    password:'',
    tel:'',
    type:radioValue
  }

  
const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setRadioValue(newValue);
    Formik.setFieldValue('type', newValue);
  }

const Formik=useFormik({
  initialValues:initialValues,
  validationSchema:schemaValidateUser,
  onSubmit:async (values,{resetForm}) =>{

if(values.type !== ':type' ){
      const response=await apiAuth.sigUp(values)
      resetForm()
      if(response.data.status === true){
          const {user,token}=response.data
          if(user.type === 'candidato'){
              navigate('/vagas')
              SigUp(user,token)
              toast.success('login feito com sucesso')
          }else if(user.type === 'recrutador'){
              navigate('/painel/recrutador/candidatos')
              SigUp(user,token)
              toast.success('login feito com sucesso')
          }
      
      }else{
          toast.error('email e/ou senha incorretos')
      }}
    
}})




   
   
   return <Layout>
    <ContentPage >
      
      <Page>
       <h3>Cadastro  { type !== undefined &&  <span>{`>> ${type}`}</span> } </h3>
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
                 <input type="radio" name="type"  checked={radioValue === 'candidato'} value={'candidato'} onChange={handleRadioChange} />
                  <span>sou candidato</span>
                </div>
                <div className="radio-item">
                 <input type="radio" name='type' checked={radioValue === 'recrutador'} value={'recrutador'} onChange={handleRadioChange} />
                  <span>sou recrutador</span>
                </div>
           </div>
          <button type='submit' >criar conta</button>
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

