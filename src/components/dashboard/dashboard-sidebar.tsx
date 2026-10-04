"use client"
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { UserRole } from "@/types";
import { adminRoute, doctorRoute } from "@/routes";
import { patientRoute } from "@/routes/patiant.route";
import type { TSidebarRoute } from "@/types/sidebar.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarRoute: Record<UserRole, unknown[]> = {
  ADMIN: adminRoute,
  DOCTOR: doctorRoute,
  PATIENT: patientRoute,
  SUPER_ADMIN: adminRoute
}

export function DashboardSidebar({role}: {role: UserRole}) {

  const pathname = usePathname()
const routes: TSidebarRoute[] = (sidebarRoute[role] || []).map((route: any) => ({
  ...route,
  name: route.name ?? route.title,
  path: route.path ?? route.url,
}))


  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Link href="/">
                <h1 className="text-2xl font-extrabold text-green-600">
                  PH Health Care
                </h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {routes.map((route) => (
              <SidebarMenuItem key={route.name}>
                <SidebarMenuButton
                  size="lg"
                  className={`${
                    pathname === route.path ? "bg-green-600 text-white" : ""
                  }`}
                >
                  <Link href={route.path}>{route.name}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))} 
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
