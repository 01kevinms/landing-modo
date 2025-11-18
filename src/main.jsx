import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes/Routes.jsx'
import { HashRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Router />    
    </HashRouter>
  </StrictMode>,
)
