import { useParams, useSearchParams } from "react-router-dom"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"


export const CursoId= ()=>{
    const params=useParams()


    return <Layout>
        <ContentPage titlePage={`pagina do ${params.id}`}>
            <>
            </>
        </ContentPage>
    </Layout>
}