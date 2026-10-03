import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { UserRole } from "@/types";
import { adminRoute, doctorRoute } from "@/routes";
import { patientRoute } from "@/routes/patiant.route";
import type { TSidebarRoute } from "@/types/sidebar.type";

const sidebarRoute: Record<UserRole, TSidebarRoute[]> = {
  ADMIN: adminRoute,
  DOCTOR: doctorRoute,
  PATIENT: patientRoute,
  SUPER_ADMIN: adminRoute
}

export function DashboardSidebar({role}: {role: UserRole}) {

const routes: TSidebarRoute[] = sidebarRoute[role] || []


  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#">
                <h1 className="text-2xl font-extrabold text-green-600">
                  PH Health Care
                </h1>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {routes.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
