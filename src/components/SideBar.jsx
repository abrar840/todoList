import React from "react"
import {
  Calendar,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
  AlertTriangle,
  HelpCircle,
  LogOut,
} from "lucide-react"

// Menu items.
const items = [
  { title: "Dashboard", url: "#", icon: LayoutDashboard },
  { title: "Vital Task", url: "#", icon: AlertTriangle },
  { title: "My Task", url: "#", icon: Calendar },
  { title: "Task Categories", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
  { title: "Help", url: "#", icon: HelpCircle },
]

const SideBar = () => {
  return (
    <div className="fixed left-0   h-[90vh] mt-14 w-64 bg-[#ff6969] flex flex-col   z-50">

      <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-18 h-18 rounded-full border border-amber-200 bg-black shadow-lg flex items-center justify-center z-10 overflow-hidden">
        <img
          src="../public/images/image.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="pt-24 flex flex-col flex-1 px-4">
        <nav className="space-y-2">
          {items.map((item, idx) => (
            <a
              key={item.title}
              href={item.url}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group
                ${idx === 0
                  ? "bg-white text-[#ff6969] font-semibold"
                  : "text-white hover:bg-white hover:text-[#ff6969]"
                }`}
            >
              <item.icon className={`w-5 h-5 ${idx === 0
                  ? "text-[#ff6969]"
                  : "text-white group-hover:text-[#ff6969]"
                }`} />
              <span className={`${idx === 0
                  ? "text-[#ff6969]"
                  : "text-white group-hover:text-[#ff6969]"
                }`}>{item.title}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-white/30 p-4">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-white hover:bg-[#e85c5c] rounded-lg transition-colors group">
          <LogOut className="w-5 h-5 text-white group-hover:text-white" />
          <span className="text-white group-hover:text-white">Log Out</span>
        </button>
      </div>
    </div>
  )
}

export default SideBar
