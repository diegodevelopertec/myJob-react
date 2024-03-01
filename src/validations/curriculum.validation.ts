import * as y from 'yup'


export const schemaValidateCurriculum=y.object().shape(  
    {
        name: y.string().min(3).max(10).required(),
        lastname: y.string().min(3).max(20).required(),
       tel: y.string().max(11)
        .matches(/^[0-9]{2}9[0-9]{8}$/, 'Número de telefone inválido')
        .required(),
       office: y.string().min(4).max(10).required(),
       pcd: y.number().required(),
       deficiency: y.string().max(50).required(),
       email: y.string().email().required(),
       github: y.string().url().required(),
       linkedin: y.string().url().required(),
       about: y.string().min(100).max(400).required(),
       city: y.string().min(4).max(30).required(),
       state: y.string().max(2).required(),
       dateNasc: y.string().max(10).required(),
       password: y.string().max(20).matches(/^[a-zA-Z0-9]{3,20}$/, 'Senha inválida').required()
      }
    )