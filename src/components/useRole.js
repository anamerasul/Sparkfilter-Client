"use client";

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '@/app/context/AuthContext';

const useRole = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            if (user?.email) {
                setIsLoading(true);
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/admin/${user?.email}`);
                    if (response.ok) {
                        const data = await response.json();
                        setRole(data.role);
                    } else {
                        console.error('Failed to fetch role:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching role:', error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        };

        fetchRole();
    }, [user]);

    return [role, isLoading];
};

export default useRole;
