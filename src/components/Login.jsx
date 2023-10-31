import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../authentication/auth";
import loginImage from '../assets/Left-login.png'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmitLogin = async (e) => {
        e.preventDefault()

        if (email.trim() === '' || password.trim() === '') {
            setError('Please enter both email and password.');
            return;
        }

        try {
            const user = await loginUser(email, password);
            navigate('/home');
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        }
    }

    return (
        <form onSubmit={handleSubmitLogin}>
            <div className="flex flex-row h-[calc(100vh-4.75rem)] bg-gradient-to-b from-white via-white to-blue-500 px-20">
                <div className="w-1/2 flex flex-col items-center justify-center gap-10">
                    <h1 className="font-bold text-4xl text-center">Never let the bread expire again, track it before it’s too late!</h1>
                    <img className="h-96 w-96" src={loginImage} />
                </div>
                <div className="w-1/2 flex flex-col bg-[#1F487E]/[.30] items-center justify-center m-20 gap-5 rounded-3xl">
                    <h1 className="text-5xl uppercase font-bold">Login</h1>
                    <input className="w-80 p-3 rounded-lg" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="w-80 p-3 rounded-lg" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="w-80 p-3 rounded-lg bg-[#1F487E] hover:bg-[#1F487E]/[.50] font-bold" type="submit">LOGIN</button>
                    <span>Dont have an account? <Link to='/register' className="font-bold">Register here</Link></span>
                    {error && <div className=" text-red-500">{error}</div>}
                </div>
            </div>
        </form>
    );
};

export default Login;