// import React from 'react'

// import { FormEvent } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {

    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: "A-0001",
            password: "admin123"
        }
    });


    const [login, { error }] = useLoginMutation();
    // console.log("from login", data, error)


    const onSubmit = async (data: any) => {
        console.log(data);
        const userInfo = {
            id: data.id,
            password: data.password,

        }
        // return userInfo;
        const res = await login(userInfo).unwrap();
        const user = verifyToken(res.data.accessToken)
        // console.log(user)

        console.log(res);
        dispatch(setUser({ user: user, token: res.data.accessToken }))


    }


    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id" >ID: </label>
                <input type="text" id="id" {...register("id")} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" {...register("password")} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>

    )
}

export default Login;

{/* <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
<h2 className="text-2xl font-semibold text-blue-600 mb-6">Create an Account</h2>
<form className="flex justify-center items-center">
    <div className="mb-10">
        <label htmlFor="id" className="block text-sm font-medium text-gray-600">ID: </label>
        <input type="text" id="id" className="my-4 p-2 w-full border rounded-md text-gray-800" />
    </div>
    <div className="mb-10">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
        <input type="text" id="password" className="mt-1 p-2 w-full border rounded-md text-gray-800" />
    </div>
    <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</button>
</form>
</div> */}