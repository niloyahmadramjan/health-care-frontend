import apiClient from "@/lib/apiClient";

export function authLogin(payload: { email: string; password: string }) {
  return apiClient("/auth/login", {
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


