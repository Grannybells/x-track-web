import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config";

import React, { useState, useEffect } from "react";

export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user; // Optionally return the user object
    } catch (error) {
        throw error; // Rethrow the error to handle it in the calling code
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user; // Optionally return the user object
    } catch (error) {
        throw error; // Rethrow the error to handle it in the calling code
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
    }
    catch {
    }
};

export const observeAuthState = (auth, onAuthChange) => {

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            onAuthChange(user);
        });

        return () => unsubscribe();
    }, []);
};


