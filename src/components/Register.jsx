import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../authentication/auth";

import loginImage from '../assets/Left-login.png'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleSubmitRegister = async (e) => {
        e.preventDefault()
        if (email.trim() === '' || password.trim() === '') {
            setError('Please enter both email and password.');
            return;
        }

        try {
            const user = await registerUser(email, password);
            navigate('/login')
            alert('user registered!')
        } catch (error) {
            setError('Email is already registerd. Please try again.');
        }
    }

    return (
        <div className="flex flex-row h-[calc(100vh-4.75rem)] bg-gradient-to-b from-white via-white to-blue-500 px-20">
            <div className="w-1/2 flex flex-col bg-[#1F487E]/[.30] items-center justify-center m-20 gap-5 rounded-3xl">
                <h1 className="text-5xl uppercase font-bold">Register</h1>
                <input className="w-80 p-3 rounded-lg" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="w-80 p-3 rounded-lg" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="w-80 p-3 rounded-lg bg-[#1F487E] hover:bg-[#1F487E]/[.50] font-bold" onClick={handleSubmitRegister}>Register</button>
                <span>Already have an account? <Link to='/login' className="font-bold">Login here</Link></span>
                {error && <div className=" text-red-500">{error}</div>}
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center gap-10">
                <h1 className="font-bold text-4xl text-center">Never let the bread expire again, track it before it’s too late!</h1>
                <img className="h-96 w-96" src={loginImage} />
            </div>
        </div>
    );
};

export default Register;
