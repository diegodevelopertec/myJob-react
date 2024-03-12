import { useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Input } from "../../../componentes/Input"
import { Painel } from "../../../componentes/Painel"
import { TextArea } from "../../../componentes/TextArea"
import { Form, Page } from "./style"
import apiCategory from "../../../actions/apiCategory"
import { CategoryInterface } from "../../../interfaces/category"
import { IJob } from "../../../interfaces/job"
import { apiJobs } from "../../../actions/jobs.action"
import { useParams } from "react-router-dom"
import { useFormik } from "formik"
import { schemaValidationJobs } from "../../../validations/jobs.validation"

export const AtualizarVagaPainel=()=>{
  const [categorys,setCategorys]=useState<CategoryInterface[] | []>([])
  const [jobId,setJobId]=useState<IJob | null>(null)
  const {id}=useParams()

  useEffect(()=>{
    const getListCategorys=async()=>{
      const list=await apiCategory.getCategorys() as CategoryInterface[]
      setCategorys(list)
    }

    getListCategorys()

    },[])
    
  useEffect(()=>{
    const getJobParams=async()=>{
      const job=await apiJobs.getJobId(parseInt(id as string))
      setJobId(job)
      console.log(job)
    }
    getJobParams()

    },[])

   
  const Formik=useFormik({
    initialValues:{
      title: jobId?.title ? jobId?.title : '',
      description:jobId?.description,
      salary: jobId?.salary,
      location: jobId?.location,
      requirements: jobId?.requirements,
      level: jobId?.level,
      benefits:jobId?.benefits,
      createDate: jobId?.createDate,
      exclusivepcd:jobId?.exclusivepcd,
      expireDate: jobId?.expireDate,
      companyId:jobId?.companyId,
      contractType:jobId?.contractType,
      category:jobId?.companyId,
     
    },
    validationSchema:schemaValidationJobs,
    onSubmit:async(values,{resetForm})=>{

    }
  })



    return <Painel >
        <ContentPage titlePage="Atualizar  Vaga">
        <Page>
          <p className="text">Preencha os campos para criar a nova vaga:</p>
          <Form onSubmit={Formik.handleSubmit}>
              <div className="cx-inputs">
                  <div className="cx-input">
                    <label htmlFor="">➡️ Titulo</label>
                    <Input placeholder="digite o titulo da vaga" name="title" value={Formik.values.title} onChange={Formik.handleChange} />
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Salário(R$)</label>
                    <Input placeholder="digite o salario para essa vaga" type="number"  name="salary" value={Formik.values.salary} onChange={Formik.handleChange}  />
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Descrição</label>
                      <TextArea h="130px" placeholder="Faça uma breve descrição da vaga"></TextArea>
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Requisitos(separados por virgula)</label>
                    <TextArea h="130px" placeholder="digite os requitos para essa vaga" name="requirements" value={Formik.values.requirements} 
                       onChange={Formik.handleChange}>{Formik.values.requirements}
                    </TextArea>
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Beneficios(separados por virgula)</label>
                    <TextArea h="130px" name="benefits" value={Formik.values.benefits} >{Formik.values.benefits}</TextArea>
                    <p className="error"></p>
                  </div>
                  <div className="cx-input category-cx">
                    <label htmlFor="">➡️ Categoria</label>
                    <select name="category"value={Formik.values.category}  >
                      {categorys?.map((c,k)=><option value={c.name}>{c.name}</option>)}
                   </select>
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Data de Expiração(opcional)</label>
                    <Input type="date" placeholder="" name="expireDate" value={Formik.values.expireDate}  />
                    <p className="error"></p>
                  </div>

                      <div className="cx-input">
                          <label htmlFor="">➡️ Tipo de contrato</label>
                          <Input placeholder="Ex:CLT,CNPJ,etc" name="type" value={Formik.values.contractType}  />
                          <p className="error"></p>
                      </div>
                      <div className="cx-input-radio">
                          <label htmlFor="">➡️ Exclusiva para PCD ?</label>
                          <input type="radio" name="exclusive_pcd"    />sim
                          <input type="radio" name="exclusive_pcd" />Não
                          <p className="error"></p>
                      </div>

                  <div className="cx-btn">
                    <input type="submit" value="atualizar vaga" />
                  </div>
                
                

            </div>
          </Form>
        </Page>
        </ContentPage>
    </Painel>
}