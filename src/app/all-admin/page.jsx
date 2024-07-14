"use client"
import AdminRouteGuard from '@/components/AdminRouteGuard';
import React, { useEffect, useState } from 'react';
import { FaTrash, FaUser } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const AdminPage = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}/admin`)
            .then(res => res.json())
            .then(data => {
                setAdmins(data);
            });
    }, []);

    const handleMakeAdmin = (admin) => {
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${process.env.NEXT_PUBLIC_API_LINK}/admin/${admin._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => response.json())
                    .then(res => {
                        if (res.modifiedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${admin.email} is an Admin Now!`,
                                showConfirmButton: false,
                                timer: 1500
                            });

                            // Update the local state to reflect the changes immediately
                            setAdmins(prevAdmins => prevAdmins.map(a =>
                                a._id === admin._id ? { ...a, role: 'admin' } : a
                            ));
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        });
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${process.env.NEXT_PUBLIC_API_LINK}/admins/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your query has been deleted.",
                                icon: "success"
                            });
                            setAdmins(admins.filter(admin => admin._id !== id));

                        }
                    })
            }
        });

    }

    return (
        <AdminRouteGuard>
            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin, idx) => (
                            <tr key={admin._id}>
                                <th>{idx + 1}</th>
                                <th>{admin?.email}</th>
                                <th className={admin?.role === 'admin' ? 'font-extrabold text-blue-500' : ''}>{admin?.role}</th>
                                <th>
                                    <button
                                        onClick={() => handleMakeAdmin(admin)}
                                        disabled={admin?.role === 'admin'}
                                        className="btn bg-blue-100">
                                        <FaUser className="text-xl text-blue-700" />
                                    </button>
                                </th>
                                <th> <button onClick={() => handleDelete(admin._id)} className='  text-red-500 hover:text-red-700'><FaTrash className='text-2xl' /></button></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminRouteGuard>
    );
};

export default AdminPage;
