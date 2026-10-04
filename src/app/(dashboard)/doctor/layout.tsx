import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import React, { type ReactNode } from "react";

function DoctorLayout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard roles={["DOCTOR"]}>
      {/** biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
      <DashboardShell role="DOCTOR">
      {children}
      </DashboardShell>
    </RoleGuard>
  );
}

export default DoctorLayout;
