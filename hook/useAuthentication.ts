import { useAppSelector } from "lib/hooks";
import { selectCurrentToken } from "lib/slice/authslice";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useAuthentication(page: any) {

    const router = useRouter();
    const token = useAppSelector(selectCurrentToken);

    useEffect(()=> {
        if(token){
            router.push('/dashboard')
        } else {
            router.push('/auth/login')
        }
    }, [token])
    
    return page
}