import AuthGuard from "@/components/auth/auth-guard";

function GlobalDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      {children}
    </AuthGuard>
  );
}

export default GlobalDashboardLayout;
