import { Button } from "react-scroll"
import { ContentPage } from "../../../componentes/ContentPage"
import { Input } from "../../../componentes/Input"
import { Painel } from "../../../componentes/Painel"
import { TextArea } from "../../../componentes/TextArea"
import { Form } from "./style"

export default ()=>{
    return <Painel>
        <ContentPage titlePage="Informe dados da sua Empresa" >
        <Form>
            <div className="cx-inputs">
                <div className="cx-input">
                  <label htmlFor="">Nome</label>
                  <Input placeholder="nome da empresa" name="" value={''} onChange={()=>{}} />
                  <p className="error"></p>
                </div>
           
          
                <div className="cx-input">
                  <label htmlFor="">Email</label>
                  <Input placeholder="nome da empresa" name="" value={''} onChange={()=>{}} />
                  <p className="error"></p>
                </div>
        
          
                <div className="cx-input">
                  <label htmlFor="">Telefone</label>
                  <Input placeholder="nome da empresa" name="" value={''} onChange={()=>{}} />
                  <p className="error"></p>
                </div>
         
           
                <div className="cx-input">
                  <label htmlFor="">CNPJ</label>
                  <Input placeholder="nome da empresa" name="" value={''} onChange={()=>{}} />
                  <p className="error"></p>
                </div>
                <div className="cx-input">
                  <label htmlFor="">Instagram(opcional)</label>
                  <Input placeholder="nome da empresa" name="" value={''} onChange={()=>{}} />
                  <p className="error"></p>
                </div>
                <div className="cx-input">
                  <label htmlFor="">Site(opcional)</label>
                  <Input type="url" placeholder="site da empresa" name="" value={''} onChange={()=>{}} />
                  <p className="error"></p>
                </div>
                <div className="cx-input">
                  <label htmlFor="">Linkedin(opcional)</label>
                  <Input type="url"  placeholder="linkedin da empresa" name="" value={''} onChange={()=>{}} />
                  <p className="error"></p>
                </div>
                <div className="cx-input">
                  <label htmlFor="">CNPJ</label>
                  <Input placeholder="cnpj da empresa" name="" value={''} onChange={()=>{}} />
                  <p className="error"></p>
                </div>
                <div className="cx-input">
                  <label htmlFor="">Sobre a empresa</label>
                    <TextArea h="300px" placeholder="digite algo sobre a empresa" > </TextArea>
                  <p className="error"></p>
                </div>

            
                <div className="city-state">
                    <div className="cx-input">
                    <label htmlFor="">Cidade</label>
                    <Input placeholder="Cidade d empresa" name="" value={''} onChange={()=>{}} />
                    <p className="error"></p>
                    </div>
                    <div className="cx-input">
                        <label htmlFor="">Estado</label>
                        <Input placeholder="Estado  da empresa" name="" value={''} onChange={()=>{}} />
                        <p className="error"></p>
                     </div>
                   
                </div>
                <div className="cx-btn">
                  <input type="submit" value="Enviar " />
                </div>
               
               

           </div>
        </Form>
        </ContentPage>
    </Painel>
}