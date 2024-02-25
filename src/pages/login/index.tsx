
import { useFormik} from "formik"
import { Input } from "../../componentes/Input"
import { GlobalStyle } from "../../globalStyle"
import { Form, Page } from "./style"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
 import { useAuthContext } from "../../context/authContext"
import { Layout } from "../../componentes/Layout"
import { apiAuth } from "../../actions/auth.action"
import * as y from 'yup'


type User={
    id:number,
    name:string,
    lastname:string,
    email:string,
    password:string,
    type:string,
    tel:string,
    photo:string

}
interface PromiseAuth{
user:User,
status:boolean,
token:string,

}


const schemaValidate = y.object().shape({
    email:y.string().email('Email inválido').trim(),
    password: y.string().max(14,'A senha deve ter no máximo 14 caracteres').trim(),
    type:y.string().trim(),
});


export const Login=()=>{

    const {SigIn}=useAuthContext()
    const {type}=useParams()
    const navigate=useNavigate()
    const [radioValue, setRadioValue] = useState<string>(!type ? '' : type);

    useEffect(()=>{
        document.title='MyJobs/Login'
      },[])

    const Formik=useFormik(
       { initialValues:{
            email:'',
            password:'',
            type:''
        },
        validationSchema:schemaValidate,
        onSubmit:async (values,{resetForm})=>{
           const response=await apiAuth.signIn(values)
            if(response.data.status === true){
                const {user,token}=response.data
                if(user.type === 'candidato'){
                    navigate('/vagas')
                    SigIn(user,token)
                    toast.success('login feito com sucesso')
                }else if(user.type === 'recrutador'){
                    navigate('/painel/vagas')
                    SigIn(user,token)
                }
            
            }else{
                toast.error('email e/ou senha incorretos')
            }
           
        }
    }
    )
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setRadioValue(newValue);
        Formik.setFieldValue('type', newValue);
      };


      
    return <Layout>
        <Page>
            <Form action="" method="POST" onSubmit={Formik.handleSubmit}  >
                <h2>Entrar</h2>
                <p>Preencha os campos para entrar na sua conta:</p>
                    <div className="inputs">
                        <div className="cx-input">
                            <Input bx={`0 0 3px ${GlobalStyle.bgThemeSecondary}`}  
                            value={Formik.values.email}  name={'email'}
                            onChange={Formik.handleChange}
                            type={'email'}  placeholder={'digite seu email'} p={'16px 22px'} 
                            />
                            {Formik.errors.email && <p>{Formik.errors.email }</p>}
                        </div>
                        <div className="cx-input">
                            <Input bx={`0 0 3px ${GlobalStyle.bgThemeSecondary}`}  
                            value={Formik.values.password}  name={'password'}
                            onChange={Formik.handleChange}
                            type={'password'}  placeholder={'digite sua senha'} p={'16px 22px'} 
                            />
                            {Formik.errors.password && <p>{Formik.errors.password }</p>}
                        </div>
                        <div className="cx-radio">
                        <p>Entrar como: </p>
                        <span>
                        <div className="input-radio">
                            <input type="radio" name="type"  checked={radioValue === 'candidato'} value={'candidato'} onChange={handleRadioChange} />
                                <span>candidato</span>
                            </div>
                            <div className="input-radio">
                            <input type="radio" name='type' checked={radioValue === 'recrutador'} value={'recrutador'} onChange={handleRadioChange} />
                            <span>recrutador</span>
                            </div>
                            <p className="error">{Formik.errors.type}</p>
                        </span>
                    </div>
                    </div>
                    <div className="actions">
                        <input type="submit" value={'Entrar'} />
                    </div>
            </Form>
        </Page>
    </Layout>
    
}