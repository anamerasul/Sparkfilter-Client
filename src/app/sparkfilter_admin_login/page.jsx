"use client";
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaGoogle } from 'react-icons/fa6';

const AdminLoginPage = () => {
    const { signInWithGoogle, user } = useContext(AuthContext);

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            console.log('User sign-in request sent');
        } catch (err) {
            console.error("Error during sign-in:", err);
        }
    };

    return (
        <div className=''>
            <div>
            <h1 className='text-2xl md:text-5xl mb-10 md:mb-20 text-center font-semibold'>Admin Login</h1>
            </div>
            <div className='lg:h-[80vh] h-[50vh] flex justify-center items-center'>
                {user ? (
                    <div className='space-y-5'>
                        <p>Welcome, {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        <h1 className='text-blue-500'>Request Sent Wait For Approval</h1>
                    </div>
                ) : (
                    <button onClick={handleGoogleSignIn} className='border-2 p-7 rounded-full text-xl font-bold bg-blue-100 hover:bg-blue-200 flex justify-center items-center gap-4 '>
                        Google Login <FaGoogle className='text-xl text-red-600'/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default AdminLoginPage;
