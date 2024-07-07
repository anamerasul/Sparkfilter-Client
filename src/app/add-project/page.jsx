"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ImSpinner10 } from "react-icons/im";
import AdminRouteGuard from '@/components/AdminRouteGuard';
// export const metadata = {
//     title: "Add-Project | SparkFilter",
//     description: "Add-Project Page",
//   };

const AddProjectPage = () => {
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
        const name = form.name.value;
        const type = form.type.value;
        const description = form.description.value;
        const image = form.projectImage.files[0];

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error.message || 'Failed to upload image');
            }

            setImage(data.data.display_url);

            const allData = {
                name,
                type,
                description,
                date: `${day}/${month}/${year}`,
                image: data.data.display_url
            };

            const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/project`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(allData)
            });

            const apiData = await apiResponse.json();
            if (!apiResponse.ok) {
                throw new Error(apiData.message || 'Failed to submit project');
            }
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Project Added Successfully",
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
            <div className='mb-20 bg-green-50 pt-7'>
                <h1 className='text-2xl md:text-4xl mb-10 md:mb-20 text-center font-semibold'>Add Your Project Details Here</h1>
                <form onSubmit={handleSubmit} className='p-4 md:p-10 lg:p-32'>
                    <div className='grid lg:grid-cols-2 gap-10'>
                        <div>
                            <h1 className="text-xl font-bold">Project Name:</h1>
                            <input className="w-full text-black font-semibold h-16 bg-white p-4" type="text" name="name" placeholder="Project Name" required />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Service Type:</h1>
                            <input className="w-full text-black font-semibold h-16 bg-white p-4" type="text" name="type" placeholder="Service Type" required />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Project Description:</h1>
                            <textarea className="w-full text-black font-semibold h-40 bg-white p-4" name="description" placeholder="Details" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Project Image</span>
                            </label>
                            <input type="file" name="projectImage" className="file-input file-input-bordered w-full h-16" required />
                        </div>
                    </div>
                    <div className='text-end'>
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

export default AddProjectPage;
