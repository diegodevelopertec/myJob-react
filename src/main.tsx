import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/globalContext.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
  </ContextProvider>
)
