/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthLoading from "./auth-loading";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data, isPending, isError } = useGetMe();

  const user = data?.data;

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

  return <>{children}</>;
}

export default AuthGuard;
