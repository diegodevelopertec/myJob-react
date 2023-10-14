
import { Routes } from './Routes'
import { Layout } from './componentes/Layout'
import useScrollToTop from './hooks/useScrollTop'


function App() {
  useScrollToTop()
  return <Layout>
     <Routes />
     
  </Layout>
}

export default App
