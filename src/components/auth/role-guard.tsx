/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";
import type { UserRole } from "@/types";
import { type ReactNode, useEffect } from "react";
import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import AuthLoading from "./auth-loading";
import AccessDenied from "./access-denied";


interface Iprops{
    children: ReactNode,
    roles: UserRole[]
}

function RoleGuard({ children, roles }: Iprops) {
  const router = useRouter();
  const { data, isPending, isError } = useGetMe();

  const user = data?.data;
  const isAuthorized = !!user && roles.includes(user.role)

  useEffect(() => {
    if (isPending) {
      return;
    }
    if (isError || !user) {
      router.replace("/login");
    }
  }, [isPending, user, isError, router.replace]);

  if (isPending) {
   return <AuthLoading />;
  }
  if(!isAuthorized){
    return <AccessDenied/>
  }

  return <>{children}</>;
}

export default RoleGuard;
