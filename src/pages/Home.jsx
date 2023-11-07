import React, { useEffect, useState } from "react";


import { Link, useNavigate } from "react-router-dom";
import { db } from "../authentication/config";

import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import AddForm from "../components/AddForm";
import TableData from "../components/TableData";

const Home = () => {
    return (
        <div className="h-[calc(100vh-4.75rem)] bg-gradient-to-b from-white via-white to-blue-500 px-20">
            <div className="flex flex-row items-center justify-between py-5">
                <h1>Page no. here</h1>
                <AddForm />
            </div>
            <TableData />
        </div>
    );
};

export default Home;
