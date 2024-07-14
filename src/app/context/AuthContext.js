"use client";

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
        } catch (error) {
            console.error("Error during sign-in with Google:", error);
        }
    };
    const saveUser = async user => {
        const currentUser = {
            email: user?.email,
            name: user?.displayName,
            role: 'admin',
        }
    
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/admin`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentUser),
        })
    
        const data = await response.json()
        return data
    }
    


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            saveUser(user)
            setUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    console.log(user);

    const authInfo = {
        signInWithGoogle,
        user,
    };

    if (loading) {
        return (
            <div className='h-[70vh] flex flex-col justify-center items-center'>
                <div className="flex items-center justify-center h-screen">
                    <div className="relative">
                        <div className="h-24 w-24 border-black rounded-full border-t-8 border-b-8"></div>
                        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-[#E3FF04] border-b-8 animate-spin"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
