import { useEffect, useState } from "react"
import { ContentPage } from "../../../componentes/ContentPage"
import { Input } from "../../../componentes/Input"
import { Painel } from "../../../componentes/Painel"
import { TextArea } from "../../../componentes/TextArea"
import { Form, Page } from "./style"
import apiCategory from "../../../actions/apiCategory"
import { CategoryInterface } from "../../../interfaces/category"


export const NovaVagaPainel=()=>{
  const [categorys,setCategorys]=useState<CategoryInterface[] | []>([])


  useEffect(()=>{
    const getListCategorys=async()=>{
      const list=await apiCategory.getCategorys()
      setCategorys(list)
    }

    getListCategorys()

    },[])


    return <Painel >
        <ContentPage titlePage="Nova Vaga">
        <Page>
          <p className="text">Preencha os campos para criar a nova vaga:</p>
          <Form>
              <div className="cx-inputs">
                  <div className="cx-input">
                    <label htmlFor="">➡️ Titulo</label>
                    <Input placeholder="digite o titulo da vaga" name="" value={''} onChange={()=>{}} />
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Salário(R$)</label>
                    <Input placeholder="digite o salario para essa vaga" type="number" name="digite o salario dessa vaga" value={''} onChange={()=>{}} />
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Descrição</label>
                      <TextArea h="130px" placeholder="Faça uma breve descrição da vaga"></TextArea>
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Requisitos(separados por virgula)</label>
                    <TextArea h="130px" placeholder="digite os requitos para essa vaga"></TextArea>
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Beneficios(separados por virgula)</label>
                    <TextArea h="130px"></TextArea>
                    <p className="error"></p>
                  </div>
                  <div className="cx-input category-cx">
                    <label htmlFor="">➡️ Categoria</label>
                    <select name="" id="">
                      {categorys?.map((c,k)=><option value={c.name}>{c.name}</option>)}
                   </select>
                    <p className="error"></p>
                  </div>
                  <div className="cx-input">
                    <label htmlFor="">➡️ Data de Expiração(opcional)</label>
                    <Input type="date" placeholder="" name="" value={''} onChange={()=>{}} />
                    <p className="error"></p>
                  </div>
                
              
                      <div className="cx-input">
                          <label htmlFor="">➡️ Tipo de contrato</label>
                          <Input placeholder="Ex:CLT,CNPJ,etc" name="" value={''} onChange={()=>{}} />
                          <p className="error"></p>
                      </div>
                      <div className="cx-input-radio">
                          <label htmlFor="">➡️ Exclusiva para PCD ?</label>
                          <input type="radio" name="exclusive_pcd" value={1} onChange={()=>{}} />sim
                          <input type="radio" name="exclusive_pcd"  value={0} onChange={()=>{}} />Não
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