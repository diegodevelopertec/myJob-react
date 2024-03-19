import * as y from 'yup'

export const schemaValidateUser=y.object().shape(  
    {
        name: y.string().min(3).max(30,'Máximo 30 caracteres').required('Campo obrigatório'),
        lastname: y.string().min(3).max(30,'Máximo 30 caracteres').required('Campo obrigatório'),
       tel: y.string().max(11)
        .matches(/^[0-9]{2}9[0-9]{8}$/, 'Número de telefone inválido')
        .required('Campo obrigatório'),
       type: y.string().min(5).max(10).required('Campo obrigatório'),
       email: y.string().email().required('Campo obrigatório'),
       password: y.string().max(20).matches(/^[a-zA-Z0-9]{3,20}$/, 'Senha inválida').required('Campo obrigatório'),
      }
    )
    
    export const schemaValidateUpdateUser=y.object().shape(  
      {
          name: y.string().min(3).max(30,'Máximo 30 caracteres').required('Campo obrigatório'),
          lastname: y.string().min(3).max(30,'Máximo 30 caracteres').required('Campo obrigatório'),
         tel: y.string().max(11)
          .matches(/^[0-9]{2}9[0-9]{8}$/, 'Número de telefone inválido')
          .required('Campo obrigatório'),
         email: y.string().email().required('Campo obrigatório'),
         password: y.string().max(20).matches(/^[a-zA-Z0-9]{3,20}$/, 'Senha inválida').required('Campo obrigatório'),
        }
      )
export const schemaValidateSigIn=y.object().shape(  
  {
      type: y.string().min(5).required(),
      email: y.string().email().required(),
      password: y.string().max(20).matches(/^[a-zA-Z0-9]{3,20}$/, 'Senha inválida').required()
    }
  )