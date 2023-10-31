import React, { useEffect, useState } from "react";


import { Link, useNavigate } from "react-router-dom";
import { db } from "../authentication/config";

import { doc, setDoc, collection, addDoc } from "firebase/firestore";

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState(null);

    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [productManufactured, setProductManufactured] = useState('')
    const [productExpiration, setProductExpiration] = useState('')

    const handleSubmitData = async (e) => {
        e.preventDefault()

        if (productName.trim() === '' || productQuantity.trim() === '' || productManufactured.trim() === '' || productExpiration.trim() === '') {
            setError('Please enter both email and password.');
            return;
        }
        try {
            const docRef = await addDoc(collection(db, "cities"), {
                productName: productName,
                productQuantity: productQuantity,
                productManufactured: productManufactured,
                productExpiration: productExpiration,
            });
            console.log(docRef.id, "Data is submitted successfully")
            setShowModal(false)
        } catch (error) {
            console.log(error, "Data is not submitted")
        }
    }

    return (
        <div className="h-[calc(100vh-4.75rem)] bg-gradient-to-b from-white via-white to-blue-500 px-20">
            <div className="flex flex-row items-center justify-between py-5">
                <h1>Page no. here</h1>
                <button className="px-5 py-2 bg-[#1F487E]/[.30] hover:bg-[#1F487E]/[.80] rounded-md font-bold uppercase" onClick={() => setShowModal(true)}>Add item</button>
            </div>
            {showModal ? (
                <>
                    <div className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-1/2 h-auto bg-[#1F487E]/[.80] rounded-3xl p-10">
                            <form onSubmit={handleSubmitData}>
                                <div className="flex flex-col gap-5">
                                    <h1 className=" text-5xl uppercase font-bold text-center mb-5">Add item</h1>
                                    <input onChange={(e) => setProductName(e.target.value)} className="w-full h-10 p-6 rounded-lg " placeholder="Name of product" />
                                    <input onChange={(e) => setProductQuantity(e.target.value)} className="w-full h-10 p-6 rounded-lg " placeholder="Quantity of product" />
                                    <input onChange={(e) => setProductManufactured(e.target.value)} className="w-full h-10 p-6 rounded-lg " placeholder="Manufacturing date of product" />
                                    <input onChange={(e) => setProductExpiration(e.target.value)} className="w-full h-10 p-6 rounded-lg " placeholder="Expiration date of product" />
                                    {error && <div className="text-center text-red-500">{error}</div>}
                                    <div className="flex flex-row self-center gap-5">
                                        <button className="px-10 py-2 bg-green-500 rounded font-bold text-xl hover:bg-green-600" onClick={() => setShowModal(false)} >Close</button>
                                        <button className="px-10 py-2 bg-red-500 rounded font-bold text-xl hover:bg-red-600" type="submit">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : null}

            <div className="flex flex-col border-[2px] border-black rounded-3xl">
                <div className="h-12 bg-[#1F487E]/[.30] flex flex-row px-10 items-center justify-between font-semibold rounded-t-3xl">
                    <span>No.</span>
                    <span>Name</span>
                    <span>Quantity</span>
                    <span>Manufacturing date</span>
                    <span>Expiration date</span>
                    <span>Status</span>
                    <span>Action</span>
                </div>
                <div className="flex flex-col gap-2 px-1 bg-[#E7E7E7] p-2 rounded-b-3xl">
                    <div className="border-[1px] h-12 border-black bg-white rounded-md flex flex-row items-center justify-between px-5">
                        <span>001</span>
                        <span>Gardenia</span>
                        <span>20</span>
                        <span>10/8/23</span>
                        <span>10/16/23</span>
                        <span>Fresh</span>
                        <div className="flex flex-row">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>

                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="border-[1px] h-12 border-black bg-white rounded-md flex flex-row items-center justify-between px-5">
                        <span>001</span>
                        <span>Gardenia</span>
                        <span>20</span>
                        <span>10/8/23</span>
                        <span>10/16/23</span>
                        <span>Fresh</span>
                        <div className="flex flex-row">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>

                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="border-[1px] h-12 border-black bg-white rounded-md flex flex-row items-center justify-between px-5">
                        <span>001</span>
                        <span>Gardenia</span>
                        <span>20</span>
                        <span>10/8/23</span>
                        <span>10/16/23</span>
                        <span>Fresh</span>
                        <div className="flex flex-row">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>

                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
