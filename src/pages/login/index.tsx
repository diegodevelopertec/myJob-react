
import { useFormik} from "formik"
import { Input } from "../../componentes/Input"
import { GlobalStyle } from "../../globalStyle"
import { Page } from "./style"
import { toast } from "react-toastify"
import * as Yup from 'yup'
import { useUserContext } from "../../context/authcontext"
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { apiAuth } from "../../actions/auth.action"
import { Link } from "react-router-dom"



const schemaValidate = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('O email é obrigatório').trim(),
    password: Yup.string().max(8,'A senha deve ter no máximo 8 caracteres').trim().required('A senha é obrigatória'),
    type:Yup.string().trim().required('selecione seu tipo de usuário'),
});


export const Login=()=>{
    const {loginAuth}=useUserContext()
    const {type}=useParams()
    const navigate=useNavigate()
    const [radioValue, setRadioValue] = useState<string>(type ? type : '');
    const Formik=useFormik(
       { initialValues:{
            email:'',
            password:'',
            type:radioValue
        },
        validationSchema:schemaValidate,
        onSubmit:async (values,{resetForm})=>{
            
        }}
    )
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setRadioValue(newValue);
        Formik.setFieldValue('type', newValue);
      };


      
    return <Page>
            <form action="" method="POST" onSubmit={Formik.handleSubmit} >
                <h2>Entrar</h2>
                <p>Preencha os campos para entrar na sua conta:</p>
                <div className="inputs">
                   <div className="cx-input">
                      <Input bx={`0 0 3px ${GlobalStyle.bgThemeSecondary}`}  
                        value={Formik.values.email} 
                        onChange={Formik.handleChange}
                       type="email"  name="email" placeholder="Digite seu email" p={'16px 22px'} 
                      />
                      {Formik.errors.email && <p>{Formik.errors.email}</p>}
                   </div>
                    <div className="cx-input">
                        <Input bx={`0 0 3px ${GlobalStyle.bgThemeSecondary}`} 
                         name="password" value={Formik.values.password} onChange={Formik.handleChange}
                            type="password" p={'16px 22px'} placeholder="Digite sua senha"  
                        />
                        {Formik.errors.password && <p>{Formik.errors.password}</p>}
                    </div>
                    <div className="cx-radio">
                        <p>Entrar como: </p>
                        <span>
                        <div className="input-radio">
                         <input type="radio" name="type"  checked={radioValue === 'candidato'} value={'candidato'} onChange={handleRadioChange} />
                            <span>sou candidato</span>
                        </div>
                        <div className="input-radio">
                         <input type="radio" name='type' checked={radioValue === 'recrutador'} value={'recrutador'} onChange={handleRadioChange} />
                        <span> recrutador</span>
                        </div>
                        <p className="error">{Formik.errors.type}</p>

                        
                        </span>
                    </div>
                </div>
                <div className="actions">
                    <div className="cx-btn">
                        <input type="submit" value={'Entrar'} />
                        <div className="about">
                          <Link to=''>Esqueci minha senha</Link>
                          <Link to={`/cadastro/${type}?`}>Não tem uma conta ainda ? Clique aqui</Link>
                        </div>
                    </div>
                    <hr />
                    <div className="cx-media-links">
                        <div className="media-link">
                            {/*<MediaLinkRadius  href="gitmedialink.png" image='assets/gitmedialink.png' />
                            <MediaLinkRadius  href="" image='assets/googlemedia.png' />
<MediaLinkRadius  href="" image='assets/linkedinmedia.png' /> */}
                        </div>
                    </div>
                   

                </div>
            </form>
        </Page>
    
}