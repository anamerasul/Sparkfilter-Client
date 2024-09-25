"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
const ContactPage = () => {
    let ms = Date.now();
    const currentDate = new Date(ms);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = hours + ':' + minutes + ' ' + ampm;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const service = form.service.value;
        const description = form.description.value;

        // Format the time
        const time = `${strTime}`;

        const allData = {
            name,
            email,
            service,
            description,
            date: `${day}/${month}/${year}`,
            time: `${time}`
        };
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}/order`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allData)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank You For Your Response.We Will Contact You Very Soon.",
                    showConfirmButton: false,
                    timer: 2500
                  });
            })
        form.reset()


    };
    return (
        <div>
            <div className="relative">
                <Image className="w-full h-auto max-h-[700px] object-cover" src="/contact.jpg" height={1500} width={1500} alt="services" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Contact</h1>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-10 mx-5 md:mx-32 lg:mx-52 mt-20 lg:mt-40 lg:mb-80'>
                <div className='bg-gray-100 p-5 md:p-10'>
                    <p><FaLocationPin className='md:text-5xl text-4xl md:mb-8 mb-3 lg:mb-10' /></p>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Headquarters</h1>
                    <h1 className='mt-6'>Uposohor , Bogura , <br /> Bangladesh</h1>
                </div>
                <div className='bg-gray-100 p-5 md:p-10'>
                    <p><MdEmail className='md:text-5xl text-4xl md:mb-8 mb-3 lg:mb-10' /></p>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Email Address</h1>
                    <h1 className='mt-6'>
        <a href="mailto:mdanamerasulc@gmail.com">mdanamerasulc@gmail.com</a>
      </h1>

      <h1 className='mt-2'>
        <a href="mailto:mdanamerasul101@gmail.com">mdanamerasul101@gmail.com</a>
      </h1>

                </div>
                <div className='bg-gray-100 p-5 md:p-10'>
                    <p><FaPhoneAlt className='md:text-5xl text-4xl md:mb-8 mb-3 lg:mb-10' /></p>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Whatsapp/Phone</h1>
                     <h1 className='mt-6'>
        <a
          href="https://wa.me/8801640048741"
          target="_blank"
          rel="noopener noreferrer"
        >
          +8801640048741 (WhatsApp Call/Message)
        </a>
      </h1>

      <h1 className='mt-2'>
        <a
          href="https://wa.me/8801784449335"
          target="_blank"
          rel="noopener noreferrer"
        >
          +8801784449335 (WhatsApp Call/Message)
        </a>
      </h1>
                </div>


            </div>

            <div className='lg:flex h-fit bg-[#E3FF04] mt-14 md:mt-20 lg:mt-44'>
                <div className='lg:-mt-32'>
                    <Image src="/map.jpg" className='w-full lg:w-[800px] h-[400px] md:h-[800px]' width={1000} height={1000} alt="banner" />
                </div>
                <div className='flex-1 p-10 lg:p-10 space-y-4 md:space-y-10'>
                    <h1 className='text-2xl md:text-6xl font-bold '>What Do You Want Let Us Know</h1>
                    <p>Fill the Form And Tell Us details about your project.We will contact you very soon or email us.</p>
                    <form onSubmit={handleSubmit}>
                        <div className='md:flex gap-10 justify-between'>
                            <input className='border-b-2 w-full text-xl p-2 text-black bg-[#E3FF04] border-black focus:outline-none placeholder-black' placeholder='Your Name*' type="text" name='name' required />
                            <input className='border-b-2 w-full text-xl p-2 text-black bg-[#E3FF04] border-black focus:outline-none placeholder-black' placeholder='Email address*' type="email" name='email' required />
                        </div>
                        <input className='border-b-2 mt-4 md:mt-10 w-full text-xl p-2 text-black bg-[#E3FF04] border-black focus:outline-none placeholder-black' placeholder='Service Name/Website Link*' type="text" name='service' required />
                        <textarea className='border-b-2 mt-4 md:mt-10 h-40 w-full text-xl p-2 text-black bg-[#E3FF04] border-black focus:outline-none placeholder-black' placeholder='How Can We Help You*' type="text" name='description' required />
                        <div className='text-end mt-9'>
                            <button className='p-4 hover:bg-gray-800 px-6 bg-black text-xl text-white ' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>




        </div>
    );
};

export default ContactPage;
