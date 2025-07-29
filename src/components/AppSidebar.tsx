import { useState } from "react"
import { 
  Home, User, GraduationCap, BookOpen, Link2, 
  ClipboardList, Phone, LogIn 
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "My Profile", url: "/profile", icon: User },
  { title: "Semester 1", url: "/semester/1", icon: GraduationCap },
  { title: "Semester 2", url: "/semester/2", icon: GraduationCap },
  { title: "Semester 3", url: "/semester/3", icon: GraduationCap },
  { title: "Semester 4", url: "/semester/4", icon: GraduationCap },
  { title: "Semester 5", url: "/semester/5", icon: GraduationCap },
  { title: "Semester 6", url: "/semester/6", icon: GraduationCap },
  { title: "Blog", url: "/blog", icon: BookOpen },
  { title: "Links", url: "/links", icon: Link2 },
  { title: "Grade Card", url: "/grade-card", icon: ClipboardList },
  { title: "Contact Us", url: "/contact", icon: Phone },
  { title: "Log In", url: "/login", icon: LogIn },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-sm" 
      : "hover:bg-accent hover:text-accent-foreground transition-colors"

  return (
    <Sidebar
      className="border-r border-border"
      collapsible="icon"
    >
      <SidebarContent>
        <div className="p-4">
          {!isCollapsed && (
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-primary">IGNOU</span>
                <span className="text-xs text-muted-foreground">BCA Kaksha</span>
              </div>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="w-4 h-4" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}