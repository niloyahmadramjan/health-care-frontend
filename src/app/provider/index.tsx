
import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}
