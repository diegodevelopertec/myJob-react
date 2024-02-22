import { useParams } from "react-router-dom"
import { Layout } from "../../componentes/Layout"


export default ()=>{
    const {id}=useParams()
    return <Layout>
        <div>curso de {id}</div>
    </Layout>
}

