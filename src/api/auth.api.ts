import apiClient from "@/lib/apiClient";
import { RegisterPayload, VerifyAccountPayload } from "@/types";

export function authLogin(payload: { email: string; password: string }) {
  return apiClient("/auth/login", {
    method: "POST",
    body: payload,
  });
}

export function authRegister(payload: RegisterPayload) {
  return apiClient("/auth/register", {
    method: "POST",
    body: payload,
  });
}

export function authLogout() {
  return apiClient("/auth/logout", {
    method: "POST",
  });
}

export function getMe() {
  return apiClient("/auth/me", {
    method: "GET",
  });
}


export function googleOAuth(payload: {idToken: string}) {
  return apiClient("/auth/google", {
    method: "POST",
    body: payload
  });
}


export function verifyAccount(payload: VerifyAccountPayload) {
  return apiClient("/auth/verify-email", { method: "POST", body: payload });
}

