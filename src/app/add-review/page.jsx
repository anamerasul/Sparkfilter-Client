"use client"
import AdminRouteGuard from '@/components/AdminRouteGuard';
import React, { useState } from 'react';
import { ImSpinner10 } from 'react-icons/im';
import Swal from 'sweetalert2';

const AddReviewPage = () => {
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);

    let ms = Date.now();
    const currentDate = new Date(ms);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const image = form.projectImage.files[0];

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY || ''}`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error.message || 'Failed to upload image');
            }

            setImage(data.data.display_url);

            const allData = {
                date: `${day}/${month}/${year}`,
                image: data.data.display_url
            };


            const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/review`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(allData)
            });

            if (!apiResponse.ok) {
                const apiErrorText = await apiResponse.text();
                throw new Error(apiErrorText || 'Failed to submit Review');
            }

            const apiData = await apiResponse.json();

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Review Added Successfully",
                showConfirmButton: false,
                timer: 2500
            });
            form.reset();
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminRouteGuard>
            <div className='bg-green-50 p-10  lg:p-32'>
                <h1 className='text-2xl md:text-4xl mb-10 md:mb-20 text-center font-semibold'>Add Your Review Photo Here</h1>
                <form onSubmit={handleSubmit} className='h-[50vh] flex justify-center flex-col items-center'>
                    <div>
                        <label className="label">
                            <span className="label-text">Project Image</span>
                        </label>
                        <input type="file" name="projectImage" className="file-input file-input-bordered w-full h-16" required />
                    </div>
                    <div className='mt-8'>
                        <button
                            className={`hover:bg-green-700 md:py-4 md:text-2xl px-4 text-xl py-3 mt-8 font-bold text-gray-200 md:px-7 rounded-xl bg-green-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type='submit'
                            disabled={loading}
                        >
                            {loading ? <ImSpinner10 className='animate-spin' /> : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminRouteGuard>
    );
};

export default AddReviewPage;
