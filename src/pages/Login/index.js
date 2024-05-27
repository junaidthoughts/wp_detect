import React, { useState } from 'react'
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({setUser}) => {
    const [showPassword, setShowPassword] = useState(false);

    const initialValues = {
        email: "",
        password: "",
    }
    const validationSchema = yup.object({
        email: yup.string().email("Please enter a valid email").required("Required"),
        password: yup.string().required("Required"),
    })
    const handleSubmit = (values, formikBag) => {
        setUser(true)
        localStorage.setItem("abrar-access", "1")
    }

    return (
        <div className='flex items-center justify-center min-h-[100vh] w-full bg-cover bg-no-repeat'
            style={{
                backgroundImage: "url(/images/banner-home.jpeg)"
            }}
        >
            <div className='px-5 py-[100px] min-h-[400px] max-w-[500px] w-[60%] bg-white rounded-xl bg-opacity-20'>
                <h1 className='text-center text-2xl font-bold text-white'>
                    Login
                </h1>


                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {
                        form => (
                            <Form className='w-[90%] mx-auto'>
                                {/* field */}
                                <div className='mb-5'>
                                    <label className='font-light text-sm text-white'>
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        className="w-full bg-white py-3 px-4 rounded-lg border-0 focus:outline-none" />
                                    <p className='text-red-500 text-xs'>
                                        <ErrorMessage name="email" />

                                    </p>
                                </div>
                                {/* field */}
                                {/* field */}
                                <div>
                                    <label className='font-light text-sm text-white'>
                                        Password
                                    </label>
                                    <div className='relative'>
                                        <Field
                                            name="password"
                                            type={`${showPassword ? "text" : "password"}`}
                                            className="w-full bg-white py-3 px-4 rounded-lg border-0 focus:outline-none" />
                                        <div
                                            className='cursor-pointer'
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {
                                                !showPassword ?
                                                    <FaEye className='absolute top-2/4 translate-y-[-50%] right-4 text-gray-400' />
                                                    :
                                                    <FaEyeSlash className='absolute top-2/4 translate-y-[-50%] right-4 text-gray-400' />


                                            }
                                        </div>
                                    </div>
                                    <p className='text-red-500 text-xs'>
                                    <ErrorMessage name="password" />

                                </p>
                                </div>
                                {/* field */}

                                <a href="#" className='text-xs text-white mt-5'>
                                    Forgot Password
                                </a>

                                <button
                                    type="submit"
                                    className='mt-5 rounded-lg bg-[#003465] py-2 px-4 w-full text-white font-medium'
                                >
                                    Sign in
                                </button>

                                <img src="/images/logo.png" className='mt-5 w-[100px] mx-auto' />

                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Login