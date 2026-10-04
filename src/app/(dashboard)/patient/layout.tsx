import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import React, { type ReactNode } from "react";

function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard roles={["PATIENT"]}>
      {/** biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
      <DashboardShell role="PATIENT">
      {children}
      </DashboardShell>
    </RoleGuard>
  );
}

export default PatientLayout;
