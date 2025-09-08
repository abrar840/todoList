import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SidebarProvider>
     <SideBar />
       </SidebarProvider>
    </>
  )
}

export default App
