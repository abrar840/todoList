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

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

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
    <Sidebar className="bg-[#ff6969] text-white mt-24 h-[90vh]  rounded-bl-full">
      {/* Logo area (overlapping like in Figma) */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
        <span className="text-[#ff6969] font-bold text-lg">SU</span>
      </div>

      {/* Content */}
      <SidebarContent className="bg-[#ff6969] pt-16 flex flex-col rounded-sm">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item, idx) => (
                <SidebarMenuItem key={item.title}   className="   hover:text-[#ff6969]">
                  <SidebarMenuButton
                    asChild
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors   
                      ${
                        idx === 0
                          ? "bg-[white] font-semibold text-[#ff6969]" // active item
                          : "hover:bg-[white] text-[#ff6969]"
                      }`}
                  >
                    <a href={item.url}>
                      <item.icon className="w-5 h-5 text-white" />
                      <span className="text-white ">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-auto border-t border-white/30">
        <button className="flex items-center gap-2 px-4 py-3 w-full text-left text-white hover:bg-[#e85c5c] rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </SidebarFooter>
    </Sidebar>
  )
}

export default SideBar
