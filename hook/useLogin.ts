import { useFormik } from "formik";
import { useAppDispatch } from "lib/hooks";
import { useLoginMutation } from "lib/services";
import ILogin from "lib/services/interface/auth.interface";
import { setCredentials } from "lib/slice/authslice";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";

export default function useLogin() {

    const [loading, setLoading] = useState<boolean>(false)
    const [ login, {isLoading, isError} ] = useLoginMutation();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values: ILogin) => {
            try{
                setLoading(true);
                login(values).then((res: any)=> {
                    console.log("res: "+ JSON.stringify(res))
                    const payload = {
                        user: res.data.data.user,
                        token: res.data.data.token,
                      };
                      dispatch(setCredentials(payload));
                      localStorage.setItem("token", res.data.data.token);
                      localStorage.setItem("user", JSON.stringify(res.data.data.user));
                      void router.push("/dashboard");
                }).catch((err: any)=> {
                    console.log("err: "+ err.message)
                    setLoading(false)
                });
            } catch(err: any){
                console.log(err)
            }
        }
    });

    return {
        loading,
        validation,
        error: validation.errors,
        isError
    }
}