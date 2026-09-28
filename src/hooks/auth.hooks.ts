
import { authLogin, authLogout, getMe } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useLogin(){
    return useMutation({
        mutationFn: authLogin
    })
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