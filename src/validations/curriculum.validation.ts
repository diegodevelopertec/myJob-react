import * as y from 'yup'


export const schemaValidateCurriculum=y.object().shape(  
    {
        name: y.string().min(3).max(10).required('campo obrigatório'),
        lastname: y.string().min(3).max(20).required('campo obrigatório'),
       tel: y.string().max(11)
        .matches(/^[0-9]{2}9[0-9]{8}$/, 'Número de telefone inválido')
        .required('campo obrigatório'),
       office: y.string().min(4).max(10).required('campo obrigatório'),
       pcd: y.number().required(),
       deficiency: y.string().max(50).required(),
       email: y.string().email().required('campo obrigatório'),
       github: y.string().url().optional(),
       linkedin: y.string().url().optional(),
       about: y.string().min(100).max(400).required('campo obrigatório'),
       city: y.string().min(4).max(30).required('campo obrigatório'),
       state: y.string().max(2).required('campo obrigatório'),
       dateNasc: y.string().max(10).required('campo obrigatório'),
      

      }
    )