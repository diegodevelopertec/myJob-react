import * as y from 'yup'

export const schemaValidationJobs=y.object().shape({
    categoryid:y.number().required(),
    title: y.string().trim().min(3).max(30).required('campo obrigatório'),
    salary:  y.string().min(4,'Minimo 4 numeros(casas decimais)').max(30).required('campo obrigatório'),
    type: y.string().trim().min(3).max(10).required('campo obrigatório'),
    description:y.string().min(10).max(170,'Máximo 170 caracteres').required('campo obrigatório'),
    location: y.string().max(50).required('campo obrigatório'),
    benefits: y.string().max(150,'Máximo 150 caracteres').required('campo obrigatório'),
    requirements: y.string().max(150,'Máximo 150 caracteres').required('campo obrigatório'),
    level: y.string().optional(),
    exclusivepcd:y.number().optional(),
    createDate: y.string().required('campo obrigatório'),
    expireDate: y.string().optional(),
    contractType:y.string().max(30).required('campo obrigatório'),
 })