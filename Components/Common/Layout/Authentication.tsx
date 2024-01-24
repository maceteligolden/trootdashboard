import { useAppSelector } from "lib/hooks"
import { selectCurrentToken } from "lib/slice/authslice"
import { useRouter } from "next/router"
import { ReactNode, useEffect } from "react"

export default function Authentication({ children }: { 
    children: ReactNode
}) {

    const router = useRouter();
    const token = useAppSelector(selectCurrentToken);

    useEffect(()=> {
        if(token){
            router.push('/dashboard')
        } else {
            router.push('/auth/login')
        }
    }, [token])
 

    return (
        <>
            {
                children
            }
        </>
    )
}