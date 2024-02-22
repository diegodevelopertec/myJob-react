import { useParams, } from "react-router-dom"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { useEffect } from "react"


export const CursoId= ()=>{
    const params=useParams()
    useEffect(()=>{
        document.title='MyJobs/Curso Id'
      },[])

    return <Layout>
        <ContentPage titlePage={`pagina do ${params.id}`}>
            <>
            </>
        </ContentPage>
    </Layout>
}