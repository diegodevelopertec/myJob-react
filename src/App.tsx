
import { Routes } from './Routes'
import { Layout } from './componentes/Layout'
import useScrollToTop from './hooks/useScrollTop'


function App() {
  useScrollToTop()
  return <Routes />
     
 
}

export default App
