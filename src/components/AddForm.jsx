import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the default styles
import "tailwindcss/tailwind.css";

import { db, auth } from "../authentication/config";
import { collection, addDoc } from "firebase/firestore";

const AddForm = () => {

    const optionsProduct = [
        { value: 'Rebisco Crackers', label: 'Rebisco Crackers' },
        { value: 'Gardenia Loaf bread', label: 'Gardenia Loaf bread' },
        { value: 'Lemon Square Cheese Cake', label: 'Lemon Square Cheese Cake' },
        { value: 'Cream O Cookies', label: 'Cream O Cookies' },
    ]

    const optionsExpiration = [
        { value: 'Top', label: 'Top' },
        { value: 'Bottom', label: 'Bottom' },
        { value: 'Left', label: 'Left' },
        { value: 'Right', label: 'Right' },
    ]

    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState(null);

    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [productStickerLoc, setProductStickerLoc] = useState('')
    const [productExpirationDate, setProductExpirationDate] = useState(new Date());

    const handleSubmitData = async (e) => {
        e.preventDefault()

        if (productName.trim() === '' || productQuantity.trim() === '' || productStickerLoc.trim() === '') {
            setError('Please input all fields');
            return;
        }
        try {
            const docRef = await addDoc(collection(db, "product"), {
                createdBy: auth.currentUser.uid,
                productName: productName,
                productQuantity: productQuantity,
                productStickerLoc: productStickerLoc,
                productExpirationDate: productExpirationDate,
            });
            console.log(docRef.id, "Data is submitted successfully")
            setShowModal(false)
        } catch (error) {
            console.log(error, "Data is not submitted")
        }
    }
    return (
        <div>
            <button className="px-5 py-2 bg-[#1F487E]/[.30] hover:bg-[#1F487E]/[.80] rounded-md font-bold uppercase" onClick={() => setShowModal(true)}>Add item</button>
            {showModal ? (
                <>
                    <div className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-1/2 h-auto bg-[#1F487E]/[.80] rounded-3xl p-10">
                            <form onSubmit={handleSubmitData}>
                                <div className="flex flex-col gap-5">
                                    <h1 className=" text-5xl uppercase font-bold text-center mb-5">Add item</h1>
                                    <select onChange={(e) => setProductName(e.target.value)} selected={productName} className="block w-full px-6 py-3 rounded-lg">
                                        <option value='' disabled selected className="text-gray-400">
                                            Select a product.
                                        </option>
                                        {optionsProduct.map((option) => (
                                            <option key={option.value} >{option.label}</option>
                                        ))}
                                    </select>
                                    <input onChange={(e) => setProductQuantity(e.target.value)} selected={productQuantity} type='number' className="w-full px-6 py-3 rounded-lg " placeholder="Quantity of product" />

                                    <select onChange={(e) => setProductStickerLoc(e.target.value)} selected={productStickerLoc} className="block w-full px-6 py-3 rounded-lg">
                                        <option value='' disabled selected className="text-gray-400">
                                            Product sticker located at
                                        </option>
                                        {optionsExpiration.map((option) => (
                                            <option key={option.value} >{option.label}</option>
                                        ))}
                                    </select>

                                    <DatePicker onChange={(date) => setProductExpirationDate(date)} selected={productExpirationDate} className="w-full px-6 py-3 rounded-lg" placeholderText="Select a date" />
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
        </div>
    );
};

export default AddForm;
