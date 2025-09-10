import React from 'react'
import {
  Calendar,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
  AlertTriangle,
  HelpCircle,
  LogOut,
  Bell,
  Menu
} from "lucide-react"
import "@/App.css"
const TopBar = ({ onMenuClick }) => {
  const now = new Date();
  return (

    <div className="fixed top-0 left-0 w-full h-16 md:h-20 z-50 flex flex-row items-center justify-between gap-2 md:gap-10 lg:gap-[100px] px-4 md:px-8 shadow-lg bg-[rgba(245,245,255,0.95)]">


      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-1 hover:bg-gray-200 rounded"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="logo flex items-center gap-1">
          <p className="text-[#ff6969] text-2xl md:text-3xl lg:text-4xl font-semibold">Dash</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">board</p>
        </div>
      </div>


      <div className="hidden md:flex flex-row flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search your task here..."
          className="rounded-lg shadow-lg px-3 py-2 w-full bg-[rgba(235,245,255,0.5)] text-sm md:text-base"
        />

        <Search className="w-4 h-4 md:w-5 md:h-5 -ml-6 icon" />
      </div>

      <button className="md:hidden p-1">
        <Search className="w-5 h-5 icon" />
      </button>

      <div className="flex items-center gap-2 md:gap-4 lg:gap-7">
        <Bell className="w-4 h-4 md:w-5 md:h-5 icon" />
        <Calendar className="w-4 h-4 md:w-5 md:h-5 icon" />

        <div className="date hidden sm:flex flex-col ml-2 md:ml-4 text-left text-xs md:text-sm lg:text-base">
          <h2 className="font-medium">{now.toLocaleDateString("en-US", { weekday: "long" })}</h2>
          <p className="text-blue-400">{now.toLocaleDateString("en-GB")}</p>
        </div>
      </div>


    </div>
  )
}

export default TopBar
