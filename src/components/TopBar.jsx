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
  Bell
} from "lucide-react"
import "@/App.css"
const TopBar = () => {
  const now = new Date();
  return (

    <div className="fixed top-0 left-0 w-full h-16 md:h-24  z-50 flex flex-col md:flex-row  items-center justify-between gap-4 md:gap-10 lg:gap-[100px] px-4 md:px-8 shadow-lg bg-[rgba(245,245,245,0.95)]">


      <div className="logo flex items-center gap-1">
        <p className="text-[#ff6969] text-2xl md:text-3xl lg:text-4xl font-semibold">Dash</p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">board</p>
      </div>


      <div className=" hidden search-bar  md:flex flex-row flex-1 md:w-max-xl">
        <input
          type="text"
          placeholder="Search your task here..."
          className="rounded-lg shadow-lg px-2 py-1 flex-1 bg-[rgba(235,245,255,0.5)]"
        />

        <Search className="icon -ml-5" />
      </div>

      <button className="md:hidden">
        <Search className="icon" />
      </button>

      <div className="items gap-4 flex md:gap-7 items-center mr-48">
        <Bell className="icon" />
        <Calendar className="icon -ml-5" />

        <div className="date flex flex-col ml-5 text-left md:text-base lg:text-lg">
          <h2>{now.toLocaleDateString("en-US", { weekday: "long" })}</h2>
          <p className="text-blue-400">{now.toLocaleDateString("en-GB")}</p>
        </div>
      </div>


    </div>
  )
}

export default TopBar
