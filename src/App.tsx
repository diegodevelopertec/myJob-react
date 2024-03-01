
import { useEffect } from 'react';
import { Routes } from './Routes'
import useScrollToTop from './hooks/useScrollTop'
import { useLocation } from 'react-router-dom';

function App() {
  //useScrollToTop()
  const location=useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  },[location.pathname])
  return <Routes />
  
}

export default App
