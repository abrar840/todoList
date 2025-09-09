import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SideBar from './components/SideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen">
      <SideBar />
      <main className="ml-64">
        <App />
      </main>
    </div>
  </StrictMode>,
)
