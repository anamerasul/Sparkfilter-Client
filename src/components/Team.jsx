"use client"
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
const Team = () => {
    return (
        <div className='container mx-auto mt-20 lg:mt-40'>
            {/* Author */}
            <div className='md:flex gap-10 lg:gap-40 mx-2 md:ml-10 lg:ml-32 '>
                <div className='flex justify-center'>
                    <Image className='rounded-xl w-full md:w-60 lg:w-full' height={300} width={300} src="/author.jpg" alt="author" />
                </div>
                <div className='flex-1 mx-3 md:mx-0'>
                    <h1 className='text-[15px] mt-4  md:text-2xl lg:text-3xl underline font-semibold  md:ml-0 ml-[40%]'>Author</h1>
                    <h1 className='text-[18px] lg:mt-16 md:text-3xl lg:text-[42px] md:mt-4 font-bold mt-2 '>Anam E Rasul Chowdhuray</h1>
                    <h2 className='text-xs md:text-xl md:mt-4'>Senior Full Stack Developer &</h2>
                    <h2 className='text-xs md:text-xl'>SEO Engineer</h2>
                    <div className='flex mt-5  lg:mt-10 gap-10'>
                        <a href='#'><FaFacebook className='text-2xl md:text-4xl' /> </a>
                        <a href='#'><FaLinkedin className='text-2xl md:text-4xl' /></a>
                        <a href='#'><TbBrandFiverr className='text-2xl md:text-4xl' /></a>
                    </div>
                </div>
            </div>

            {/* team */}
            <div>
                <h2 className='text-3xl text-center mt-9 md:mt-16 lg:mt-32 md:text-5xl lg:text-6xl  font-bold'>Our Team Behind <br /> The Agency</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mt-10'>
                    <div className='p-10'>
                        <Image className='rounded-xl h-[360px] md:h-[400px] w-full' height={1000} width={250} src="/sayem.jpg" alt="author" />
                        <h1 className='text-xl font-semibold mt-4'>Sayem Hossin</h1>
                        <h2 className='text-xs'>Junior Web Developer</h2>
                    </div>

                    <div className='p-10'>
                        <Image className='rounded-xl h-[360px] md:h-[400px] w-full' height={1000} width={1000} src="/user.png" alt="author" />
                        <h1 className='text-xl font-semibold mt-4'>Ali Hassan</h1>
                        <h2 className='text-xs'>Web Designer</h2>
                    </div>
                    <div className='p-10'>
                        <Image className='rounded-xl h-[360px] md:h-[400px] w-full' height={1000} width={1000} src="/user.png" alt="author" />
                        <h1 className='text-xl font-semibold mt-4'>Hassan Mahmood</h1>
                        <h2 className='text-xs'>Graphics Designer</h2>
                    </div>
                    <div className='p-10'>
                        <Image className='rounded-xl h-[360px] md:h-[400px] w-full' height={1000} width={1000} src="/user.png" alt="author" />
                        <h1 className='text-xl font-semibold mt-4'>Ibrahim</h1>
                        <h2 className='text-xs'>SEO Expert</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Team;