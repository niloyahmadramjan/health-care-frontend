"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks";
import { UserRole } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

function HeaderSection() {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about-us" },
    { name: "Doctors", url: "/doctors" },
  ];

  const dashboardRoute : Record<UserRole, string> = {
    SUPER_ADMIN: "/admin",
    ADMIN: "/admin",
    DOCTOR: "/doctor",
    PATIENT: "/patient",
  };

  const { data, isLoading } = useGetMe();
  const { mutate: logout } = useLogout();
  const queryClinet = useQueryClient();

  const role: UserRole = !!data?.data && data?.data?.role;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "Logout",
          description: "Logged out successfully",
          type: "success",
        });
        queryClinet.removeQueries({ queryKey: ["user"] });
      },
      onError: () => {
        toast.add({
          title: "Logout failed",
          description: "Logged faild something went wronge",
          type: "error",
        });
      },
    });
  };

  return (
    <header className="w-full px-4 py-2 bg-white shadow-md  ">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <h2>PH HEALTH CARE</h2>
        </div>
        <div className="flex gap-4">
          {" "}
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
          {role && <Link href={dashboardRoute[role]}> Dashboard</Link>}
        </div>
        <div>
          {!isLoading && !data && (
            <Button
              variant="outline"
              render={<Link href="/login" />}
              nativeButton={false}
            >
              Login
            </Button>
          )}

          {!isLoading && data && (
            <Button onClick={handleLogout} variant="destructive">
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
