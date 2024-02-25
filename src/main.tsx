import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "react-toastify/dist/ReactToastify.css"
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/globalContext.tsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/authContext.tsx'




ReactDOM.createRoot(document.getElementById('root')!).render(

   <AuthProvider>
     <ContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
      <ToastContainer />
  </ContextProvider>
   </AuthProvider>
 
)
