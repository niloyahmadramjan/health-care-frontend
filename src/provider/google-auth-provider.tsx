import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { ReactNode } from "react";

function GoogleAuthProvider({ children }: { children: ReactNode }) {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!googleClientId) {
    return <>{children}</>;
  }
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      {children}
    </GoogleOAuthProvider>
  );
}

export default GoogleAuthProvider;
