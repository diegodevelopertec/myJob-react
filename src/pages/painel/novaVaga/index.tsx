import { ChangeEvent, useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Input } from "../../../componentes/Input"
import { Painel } from "../../../componentes/Painel"
import { TextArea } from "../../../componentes/TextArea"
import { Form, Page } from "./style"
import apiCategory from "../../../actions/apiCategory"
import { CategoryInterface } from "../../../interfaces/category"
import { useFormik } from "formik"
import { schemaValidationJobs } from "../../../validations/jobs.validation"


export const NovaVagaPainel=()=>{
  const [categorys,setCategorys]=useState<CategoryInterface[] | []>([])
  const [exclusivePCD,setExclusivePCD]=useState<string>('Nao')

  useEffect(()=>{
    const getListCategorys=async()=>{
      const list=await apiCategory.getCategorys() as CategoryInterface[]
      setCategorys(list)
    }

    getListCategorys()

    },[])


    const Formik=useFormik({
      initialValues:{
        title: '',
        description:'',
        salary: '00.00',
        location: '',
        requirements:'',
        level: '',
        type:'',
        benefits:'',
        createDate:'',
        expireDate:'',
        exclusivepcd:0,
        companyId:'',
        contractType:'',
        category:'0',
       
      },
      validationSchema:schemaValidationJobs,
      onSubmit:async(values,{resetForm})=>{
        const data={
          ...values,
          salary:parseFloat(values.salary),
          expireDate:values.expireDate === '' ? null : values.expireDate,
          exclusivepcd:exclusivePCD
        }
        console.log(data)
      }
    })
    

    return <Painel >
        <ContentPage titlePage="Nova Vaga">
        <Page>
          <p className="text">Preencha os campos para criar a nova vaga:</p>
          <Form action='' onSubmit={Formik.handleSubmit}>
              <div className="cx-inputs">
                  <div className="cx-input">
                    <label htmlFor="">➡️ Titulo</label>
                    <Input placeholder="digite o titulo da vaga" name="title" value={Formik.values.title} onChange={Formik.handleChange} />
                    {Formik.touched.title && <p className="error">{Formik.errors.title}</p>}
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Salário(R$)</label>
                    <Input placeholder="00,00" type="number" name="salary" value={Formik.values.salary} onChange={Formik.handleChange} />
                    {Formik.touched.salary && <p className="error">{Formik.errors.salary}</p>}
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Descrição</label>
                      <TextArea h="130px" placeholder="Faça uma breve descrição da vaga" name="description" 
                       value={Formik.values.description} onChange={Formik.handleChange}>{Formik.values.description} 
                      </TextArea>
                      {Formik.touched.description && <p className="error">{Formik.errors.description}</p>}
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Requisitos(separados por virgula)</label>
                    <TextArea h="130px" placeholder="digite os requitos para essa vaga"  name="requirements" 
                       value={Formik.values.requirements} onChange={Formik.handleChange}>{Formik.values.requirements}</TextArea>
                     {Formik.touched.requirements && <p className="error">{Formik.errors.requirements}</p>}                
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Beneficios(separados por virgula)</label>
                    <TextArea h="130px" name="benefits" 
                       value={Formik.values.benefits} onChange={Formik.handleChange} >{Formik.values.benefits}</TextArea>
                    {Formik.touched.benefits && <p className="error">{Formik.errors.benefits}</p>}   
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Local de Atuação</label>
                    <Input placeholder="" type="text" name="location" value={Formik.values.location} onChange={Formik.handleChange} />
                    {Formik.touched.location && <p className="error">{Formik.errors.location}</p>}
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️Nivel Desejado</label>
                    <Input placeholder="" type="text" name="level" value={Formik.values.level} onChange={Formik.handleChange} />
                    {Formik.touched.level && <p className="error">{Formik.errors.level}</p>}
                  </div>
                  <div className="cx-input category-cx">
                    <label htmlFor="">➡️ Categoria</label>
                    <select name="category" value={Formik.values.category} onChange={Formik.handleChange}>
                      {categorys?.map((c,k)=><option value={c.name}>{c.name}</option>)}
                   </select>
                   {Formik.touched.category && <p className="error">{Formik.errors.category}</p>}   
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Data de Expiração(opcional)</label>
                    <Input type="date" placeholder="" name="expireDate" value={Formik.values.expireDate} onChange={Formik.handleChange} />
                    {Formik.touched.expireDate && <p className="error">{Formik.errors.expireDate}</p>}   
                  </div>
                
                 <div className="cx-input">
                          <label htmlFor="">➡️ Tipo de contrato</label>
                          <Input placeholder="Ex:CLT,CNPJ,etc" name="type" value={Formik.values.type} onChange={Formik.handleChange} />
                          {Formik.touched.type && <p className="error">{Formik.errors.type}</p>}   
                </div>
                <div className="cx-input-radio">
                          <label htmlFor="">➡️ Exclusiva para PCD ?</label>
                          <input type="radio" name="exclusivepcd" value={'Sim'}   checked={exclusivePCD === 'Sim'  && true} onChange={(e:ChangeEvent<HTMLInputElement>)=>setExclusivePCD(e.target.value)} />sim
                          <input type="radio" name="exclusivepcd"  value={'Nao'}  checked={exclusivePCD === 'Nao' && true} onChange={(e:ChangeEvent<HTMLInputElement>)=>setExclusivePCD(e.target.value)} />Não
                          <p className="error"></p>
                </div>

                  <div className="cx-btn">
                    <input type="submit" value="adicionar vaga" />
                  </div>
                
                

            </div>
          </Form>
        </Page>
        </ContentPage>
    </Painel>
}