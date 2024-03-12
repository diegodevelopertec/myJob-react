import { useState } from "react"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import {Page} from './style.ts'
import Trash from "../../assets/svgs/trash"
import { useGlobalContext } from "../../context/globalContext"
import { Modal } from "../../componentes/Modal"
import Message from "../../assets/svgs/message"



export const Mensagens= ()=>{
    const {handleStateModal}=useGlobalContext()
    const [messageId,setMessageId]=useState<{id:number,text:string,type:string} | null>(null)
    const [messages,setMessages]=useState<{id:number,text:string,type:string}[] | []>([
        {id:1,text:` simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
        vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo 
        essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
        contendo passagens`,type:'Sistema'},
        {id:2,text:` simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
        vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo 
        essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
        contendo passagens`,type:'Recrutador'},
        {id:3,text:` simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
        vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo 
        essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
        contendo passagens`,type:'Recrutador'},
        {id:4,text:` simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
        vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo 
        essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
        contendo passagens`,type:'Sistema'}
    ])


    const OpenModalAndSetMessageId=(id:number)=>{
        handleStateModal(true)
        const mes=messages.find(m=>m.id === id) as {id:number,text:string,type:string}
        setMessageId(mes)

    }


    return <Layout>
        <ContentPage titlePage="Mensagens">
            <Page>
                {
                    messages.length > 0 && messages.map((m,k)=>(
                        <div className="message">
                            <div className="action-message">
                                <span onClick={()=>OpenModalAndSetMessageId(m.id)}>abrir</span>
                                <span>apagar</span>
                            </div>
                            <p className="title"><Message /> Mensagem do Sistema </p>
                            <p className="date">recebida em xx/xx/xxxx</p>
                            <p>{m.text.substring(0, 105) + '...'}</p>
                        </div>
                    ))
                }
             {
                messages.length === 0 && <div className="error">Nenhuma mensagem recebida</div>
             }
               <Modal>
                <div className="modal-message">
                    <h3><Message /> Mensagem do {messageId?.type}</h3>
                    <p className="date">recebida em xx/xx/xxxx</p>
                    <p>{messageId?.text}</p>
                </div>
              </Modal>

            </Page>
        </ContentPage>
    </Layout>
}