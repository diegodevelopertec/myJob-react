import { useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Input } from "../../componentes/Input"
import { Layout } from "../../componentes/Layout"
import { TextArea } from "../../componentes/TextArea"
import { BoxNewExperienceAndTrainning, Page } from "./style"
import Close from "../../assets/svgs/close"


export const CreateCurriculum=()=>{
    const [newTrainning,setNewTrainning]=useState<boolean>(false)
    const [newExperience,setNewExperience]=useState<boolean>(false)
    const [newSkill,setNewSkill]=useState<boolean>(false)

    return <Layout>
        <ContentPage titlePage="Criar Curriculo">
            <Page>
                <p>Preencha os campos para criar seu curriculo</p>
                <form action=''>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div className="cx-input">
                            <label htmlFor="">Nome</label>
                            <Input type="text" />
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">Email</label>
                            <Input type="text" />
                        </div>
                        <div className="cx-input">
                        <label htmlFor="">Telefone</label>
                          <Input type="text" />
                        </div>
                        <div className="cx-input">
                            <label htmlFor="">Cidade</label>
                            <Input type="text" />
                        </div>
                        <div className="cx-input">
                           <label htmlFor="">Estado</label>
                           <Input type="text" />
                        </div>
                  
                    </fieldset>
                    <fieldset>
                        <legend>Habilidades 
                            {!newSkill &&  <span onClick={()=>setNewSkill(true)}>adicionar nova</span>}
                         </legend>
                        <BoxNewExperienceAndTrainning newItem={newSkill}>
                           <div className="header-box">
                               <h2>Nova Habilidade</h2>
                               <span onClick={()=>setNewSkill(false)}><Close /></span>
                           </div>
                            <div className="cx-input">
                               <Input type="text" placeholder="digite uma habilidade ...Ex:Boa comunicação,pacote office,...." />
                            </div>
                        
                            <div className="cx-btn">
                                <button>Adicionar</button>
                            </div>
                            </BoxNewExperienceAndTrainning >
                    </fieldset>

                    <fieldset>
                        <legend>Formação 
                            {!newTrainning &&  <span onClick={()=>setNewTrainning(true)}>adicionar nova</span>}
                         </legend>
                        <BoxNewExperienceAndTrainning newItem={newTrainning}>
                           <div className="header-box">
                               <h2>Nova Formação</h2>
                               <span onClick={()=>setNewTrainning(false)}><Close /></span>
                           </div>
                            <div className="cx-input">
                               <label htmlFor="">Nome</label>
                               <Input type="text" placeholder="digite o nome do curso" />
                            </div>
                            <div className="cx-input">
                               <label htmlFor="">Instituição de Ensino</label>
                               <Input type="text" placeholder="digite o nome da instituição" />
                            </div>
                            <div className="cx-dates">
                                <div>
                                    <label htmlFor="">Inicio</label>
                                    <Input type="date" />
                                </div>
                                <div>
                                    <label htmlFor="">Conclusão:</label>
                                    <Input type="date" />
                                </div>
                            </div>
                            <div className=" cx-radio">
                               <label htmlFor="">Tipo</label>
                                <span> <input type="radio" name="formacao" />Ensino Fundamental</span>
                                <span> <input type="radio" name="formacao" />Ensino Fundamental</span>
                                <span> <input type="radio" name="formacao"  />Ensino Superior</span>
                                <span> <input type="radio" name="formacao"/>Curso Livre/Bootcamp</span>
                            </div>
                            <div className="cx-btn">
                                <button>Adicionar</button>
                            </div>
                            </BoxNewExperienceAndTrainning >
                    </fieldset>
                    <fieldset>
                        <legend>Experiência Profissional 
                            {!newExperience &&  <span onClick={()=>setNewExperience(true)}>adicionar nova</span>}
                        </legend>
                        <BoxNewExperienceAndTrainning newItem={newExperience}>
                           <div className="header-box">
                               <h2>Nova Experiência</h2>
                               <span onClick={()=>setNewExperience(false)}><Close /></span>
                           </div>
                            <div className="cx-input">
                               <label htmlFor="">Cargo</label>
                               <Input type="text" placeholder="digite seu cargo"/>
                            </div>
                            <div className="cx-input">
                               <label htmlFor="">Empresa</label>
                               <Input type="text" placeholder="digite o nome da empresa"  />
                            </div>
                            <div className="cx-dates">
                                <div>
                                    <label htmlFor="">Inicio</label>
                                    <Input type="date" />
                                </div>
                                <div>
                                    <label htmlFor="">Conclusão:</label>
                                    <Input type="date" />
                                </div>
                            </div>
                            <div className="cx-input">
                               <label htmlFor="">Sobre</label>
                                <TextArea w="auto" placeholder="digite algo sobre essa sua experiencia..." h="240px"></TextArea>
                            </div>
                            <div className="cx-btn">
                                <button>Adicionar</button>
                            </div>
                        </BoxNewExperienceAndTrainning>
                    </fieldset>
                     <div className="cx-btn">
                        <input type="submit" value={'Salvar informações'}/>
                    </div>
                </form>
            </Page>
        </ContentPage>
    </Layout>
}