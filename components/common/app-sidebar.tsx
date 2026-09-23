"use client"

import * as React from "react"
import { NavMain } from "@/components/common/nav-main"
import { NavSecondary } from "@/components/common/nav-secondary"
import { NavUser } from "@/components/common/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, Settings2Icon, CircleHelpIcon , LayoutDashboard } from "lucide-react"
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "User Info",
      url: "user-profile",
      icon: (
        <ListIcon
        />
      ),
    },
    {
      title: "Project",
      url: "project",
      icon: (
        <ChartBarIcon
        />
      ),
    },
    {
      title: "Pricing",
      url: "pricing",
      icon: (
        <FolderIcon
        />
      ),
    },
     {
      title: "Testimonial",
      url: "testimonial",
      icon: (
        <ListIcon
        />
      ),
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "setting",
      icon: (
        <Settings2Icon
        />
      ),
    },
    {
      title: "Get Help",
      url: "get-help",
      icon: (
        <CircleHelpIcon
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link href="/" />}
            >
              <LayoutDashboard className="size-5!" />
              <span className="text-base font-semibold">Welcome Back</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
