import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import React, { type ReactNode } from "react";

function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard roles={["ADMIN", "SUPER_ADMIN","PATIENT"]}>
      {/** biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
      <DashboardShell role="ADMIN">
      {children}
      </DashboardShell>
    </RoleGuard>
  );
}

export default AdminLayout;
