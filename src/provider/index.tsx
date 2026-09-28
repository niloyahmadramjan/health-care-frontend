import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import GoogleAuthProvider from "./google-auth-provider";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <GoogleAuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </GoogleAuthProvider>
  );
}
