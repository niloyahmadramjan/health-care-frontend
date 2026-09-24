import FooterSection from "@/components/layout/public/footer";
import HeaderSection from "@/components/layout/public/header";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSection />
      <main className="flex-1"> {children}</main>
      <FooterSection />
    </div>
  );
}

export default layout;
