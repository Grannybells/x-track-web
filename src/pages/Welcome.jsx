import React from "react";
import { Link, useNavigate } from "react-router-dom";
import rightimage from '../assets/Right-banner.png'
const Welcome = () => {
    return (
        <div className="h-[calc(100vh-4.75rem)] bg-gradient-to-b from-white via-white to-blue-500 flex flex-row px-20 items-center">
            <div className="flex flex-col w-3/5 gap-10">
                <h1 className="font-bold text-6xl">Never let the bread expire again, track it before it’s too late!</h1>
                <div className="flex flex-row">
                    <Link to='/login' className="bg-[#1F487E]/[.30] px-10 py-2 rounded-xl text-xl font-bold">Track now!</Link>
                    <Link to='/About' className="text-xl px-10 py-2 flex flex-row">Learn more</Link>
                </div>
            </div>
            <div className="w-2/5 self-center">
                <img src={rightimage} />
            </div>
        </div>
    )
};

export default Welcome;
