import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { observeAuthState, logoutUser } from "../authentication/auth";
import { auth } from "../authentication/config";

const NavBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    // Handle the authentication change
    const handleAuthChange = (firebaseUser) => {
        if (firebaseUser) {
            setUser(firebaseUser);
            setIsLoggedIn(true);
            setEmail(firebaseUser.email || "");
            console.log("  user log in and ui:" + firebaseUser.uid);
        } else {
            setUser(null);
            setIsLoggedIn(false);
            console.log('user log out');
        }
    };

    // Use the observeAuthState function to observe the authentication state
    observeAuthState(auth, handleAuthChange);

    // Handle the logout State of user
    const handleSubmitLogout = async (e) => {
        e.preventDefault()
        await logoutUser()
        navigate('/')
    }

    return (
        <div className="flex flex-row justify-between items-center mt-5 mx-20 px-20 h-14 rounded-2xl bg-[#1F487E]/[.30]">


            {isLoggedIn ?
                <Link to="/home" className='flex flex-row uppercase font-bold text-2xl'>
                    <h1 className="text-[#AA1818]">X</h1>
                    <h1>-Track</h1>
                </Link> :

                <Link to="/" className='flex flex-row uppercase font-bold text-2xl'>
                    <h1 className="text-[#AA1818]">X</h1>
                    <h1>-Track</h1>
                </Link>
            }

            <div className="flex flex-row gap-10 font-bold text-lg ">
                {isLoggedIn ? <Link to='/home' className="hover:text-[#1F487E]/[.80]">Home</Link> : null}
                <Link className="hover:text-[#1F487E]/[.80]" to='/about'>About</Link>
                <Link className="hover:text-[#1F487E]/[.80]" to='/feature'>Feature</Link>
                {isLoggedIn ? <span className="hover:text-[#1F487E]/[.80]">{email}</span> : null}
                {isLoggedIn ? <button onClick={handleSubmitLogout} className="hover:text-[#1F487E]/[.80]" >Logout</button> : <Link className="hover:text-[#1F487E]/[.80]" to='/login'>Login</Link>}
            </div>
        </div>
    );
};

export default NavBar;
