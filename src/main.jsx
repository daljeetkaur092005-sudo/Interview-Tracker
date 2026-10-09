import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './App/AppRoute.jsx'
import { DashBoardProvider } from './Features/DashBoard/State/useContext.jsx'

createRoot(document.getElementById('root')).render(
  
    <DashBoardProvider><AppRoute/></DashBoardProvider>
  
)
