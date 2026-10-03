// biome-ignore assist/source/organizeImports: <explanation>
import type { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import GoogleAuthProvider from "./google-auth-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <GoogleAuthProvider>
      <QueryProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryProvider>
    </GoogleAuthProvider>
  );
}
