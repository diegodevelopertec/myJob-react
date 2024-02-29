import * as y from 'yup'

export const schemaValidateUser=y.object().shape(  
    {
        name: y.string().min(3).max(30).required(),
        lastname: y.string().min(3).max(30).required(),
       tel: y.string()
        .matches(/^[0-9]{2}9[0-9]{8}$/, 'Número de telefone inválido')
        .required(),
       type: y.string().min(5).max(10).required(),
       email: y.string().email().required(),
       password: y.string().matches(/^[a-zA-Z0-9]{3,30}$/, 'Senha inválida').required()
      }
    )
    
export const schemaValidateSigIn=y.object().shape(  
  {
      type: y.string().min(5).required(),
      email: y.string().email().required(),
      password: y.string().matches(/^[a-zA-Z0-9]{3,30}$/, 'Senha inválida').required()
    }
  )