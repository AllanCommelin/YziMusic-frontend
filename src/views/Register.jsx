import React from 'react'
import { RegisterFormProvider } from "../contexts/RegisterFormContext"
import RegisterForm from "../components/register/RegisterForm"

const Register = () => (
    <RegisterFormProvider>
        <h1 className="text-main text-5xl uppercase font-black mt-6">Inscription</h1>
        <div className="h-2 w-20 bg-main mb-10"></div>
        <RegisterForm/>
    </RegisterFormProvider>
);

export default Register;