import { useParams, } from "react-router-dom"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { useEffect } from "react"
import { Page } from "./style"
import CardCourse from "../../componentes/CardCourse"
import { Courses } from "../../data"
import {BoxCourse } from "./style"
import Arrowright from "../../assets/svgs/arrowright"

export const CursoId= ()=>{
    const params=useParams()
    useEffect(()=>{
        document.title='MyJobs/Curso Id'
      },[])

    return <Layout>
        <ContentPage titlePage={` Curso de Desenvolvimeno Web `}>
            <Page>
               <div className="left">
                <section>
                    <h3><Arrowright />Sobre o Curso</h3>
                        <p>
                        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </section>
                    <section>
                        <h3><Arrowright />Conteúdo</h3>
                        <ul>
                            <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I</li>
                            <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I</li>
                            <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I</li>
                            <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I</li>
                            <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I</li>
                            <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I</li>
                            <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I</li>
                        </ul>
                    </section>
                    <section>
                        <h3></h3>
                        <p></p>
                    </section>
               </div>
               <div className="right">
                   <BoxCourse>
                        <div className="top">
                            <img src="/imgs/css-course.png" alt="" />
                        </div>
                        <div className="bottom">
                            <div className="info">
                                <span>Tecnologia</span>
                                <span>Gratuito</span>
                            </div>
                            <div className="cx-btn">
                                <button>matricular</button>
                            </div>
                        </div>
                   </BoxCourse>
               </div>



            </Page>
        </ContentPage>
    </Layout>
}