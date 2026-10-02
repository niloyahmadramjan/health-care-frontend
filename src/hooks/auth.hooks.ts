
import { authLogin, authLogout, authRegister, getMe, googleOAuth, verifyAccount } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useLogin(){
    return useMutation({
        mutationFn: authLogin
    })
}

export function useRegister(){
    return useMutation({
        mutationFn: authRegister
    })
}

export function useVerifyAccount() {
  return useMutation({
    mutationFn: verifyAccount,
  });
}

export function useLogout(){
    return useMutation({
        mutationFn: authLogout
    })
}

export function useGetMe(){
    return useQuery({
        queryKey: ["user"],
        queryFn: getMe,
        retry: false
    })
}

export function useGoogleOAuh(){
    return useMutation({
        mutationFn: googleOAuth
    })
}