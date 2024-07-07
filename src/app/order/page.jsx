"use client"
import AdminRouteGuard from '@/components/AdminRouteGuard';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { MdOutlineAccessTime, MdOutlineDateRange } from 'react-icons/md';
import Swal from 'sweetalert2';

const OrderPage = () => {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}/order`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])


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
                fetch(`http://localhost:5000/order/${id}`, {
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
                            setOrders(orders.filter(order => order._id !== id));

                        }
                    })
            }
        });

    }




    return (
        <AdminRouteGuard>
            <div className='bg-gray-100 md:pb-20 '>
                <h1 className='text-3xl md:text-5xl text-green-950 text-center  pt-5 pb-5 md:pt-10 font-semibold md:mb-20'>All Client Orders Here</h1>
                <div className='pb-10 flex justify-end mr-[10%]'>
                    <Link href="#"><button className='md:text-xl btn bg-blue-300'>Client Sheet</button></Link>
                </div>

                <div className="grid text-gray-700 lg:grid-cols-2 container mx-auto gap-10 ">
                    {
                        orders.map((order) => <div key={order._id} className='border-2 md:border-4 relative bg-green-50  rounded-lg space-y-3 border-green-500 md:p-10 p-3'>
                            <div className='md:flex mt-16 justify-between'>
                                <h1 className='text-xl md:text-2xl'>Name: <span className='font-bold'>{order.name}</span></h1>
                                <div className='flex gap-5'>
                                    <h1 className='flex  items-center gap-2'><MdOutlineDateRange className='text-blue-500' /> <span className='text-green-500'>{order.date}</span></h1>

                                    <h1 className='flex items-center gap-2'><MdOutlineAccessTime className='text-blue-500' /> <span className='text-green-500'>{order.time}</span></h1>

                                </div>
                            </div>

                            <div>
                                <h1 className='md:text-xl pb-3'>Email: <span className='font-bold'> {order.email}</span></h1>
                                <h1 className='md:text-xl'>Service Name/Link: <span className='font-bold'> {order.service}</span></h1>
                                <hr className='border-2 border-dashed border-green-700 mt-2 mb-5' />
                                <h1 className='md:pt-4 text-gray-600'><span className='font-semibold '>Details: </span>{order.description}</h1>
                            </div>
                            <div className='absolute -bottom-5 right-5 text-end  h-full flex-grow'>
                                <button onClick={() => handleDelete(order._id)} className='  text-red-500 hover:text-red-700'><FaTrash className='text-2xl' /></button>
                            </div>

                        </div>)
                    }
                </div>



            </div>
        </AdminRouteGuard>
    );
};

export default OrderPage;